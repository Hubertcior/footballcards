import React, { useState, useEffect } from 'react'
import {usePlayerStore, useClubStore} from "@/Stores/playerStore.js";
import {motion, AnimatePresence} from "motion/react";
import FavouriteSection from "./FavouriteSection.jsx";
import PanelButton from "@/components/UI/PanelButton.jsx";

const FavouriteBar = () => {

    const MotionDiv = motion.div;
    const favPlayers = usePlayerStore(state => state.playerList);
    const favClubs = useClubStore(state => state.clubList);

    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        if (modalOpen && (favPlayers.length === 0 && favClubs.length === 0)) {
            setModalOpen(false);
        }
    }, [favPlayers, favClubs, modalOpen]);

    if(favPlayers.length === 0 && favClubs.length === 0) return null;



    return (
        <>
            <PanelButton text="⭐ Open Pack's ⭐" />
            <PanelButton text="⭐ Favourite Panel ⭐" functionHandler={() => setModalOpen(true)} />
    <AnimatePresence>
        {modalOpen && (
            <>
                <MotionDiv
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setModalOpen(false)}
                />
                <MotionDiv
                    className="fixed bottom-0 left-0 right-0 bg-green-400 rounded-t-2xl p-6 max-h-[70vh] overflow-auto z-50 "
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                >
                    <button
                        onClick={() => setModalOpen(false)}
                        className="absolute top-2 right-6 w-10 h-10 flex items-center justify-center bg-red-600 text-white rounded-full text-3xl font-bold shadow hover:bg-red-700 transition z-50 p-0"
                        aria-label="Zamknij"
                        style={{ lineHeight: 1, textAlign: 'center' }}
                    >
                        <span className="flex items-center justify-center w-full h-full">×</span>
                    </button>
                    <div className="flex items-center justify-around flex-row">
                        <FavouriteSection itemsArray={favPlayers} name="player"></FavouriteSection>
                        <FavouriteSection itemsArray={favClubs} name="club"></FavouriteSection>
                    </div>
                </MotionDiv>
            </>
        )}
    </AnimatePresence>
    </>
    )
}
export default FavouriteBar
