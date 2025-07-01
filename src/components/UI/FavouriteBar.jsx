import React, { useState, useEffect } from 'react'
import {usePlayerStore, useClubStore} from "../../Stores/playerStore.js";
import {motion, AnimatePresence} from "motion/react";
import FavouriteSection from "./FavouriteSection.jsx";

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
        <MotionDiv initial={{ y: 100, opacity: 0 }}
                   animate={{ y: 0, opacity: 1 }}
                   exit={{ y: 100, opacity: 0 }}
                   transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                   onClick={() => setModalOpen(true)}
                   className="font-bold bg-black/70 p-4 rounded-full text-white cursor-pointer"> ⭐️ FavouriteBar ⭐️
        </MotionDiv>
    <AnimatePresence>
        {modalOpen && (
            <>
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setModalOpen(false)}
                />
                <motion.div
                    className="fixed bottom-0 left-0 right-0 bg-green-400 rounded-t-2xl p-6 max-h-[70vh] overflow-auto z-50 "
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                >
                    <div className="flex items-center justify-around flex-row">
                        <FavouriteSection itemsArray={favPlayers} name="player"></FavouriteSection>
                        <FavouriteSection itemsArray={favClubs} name="club"></FavouriteSection>
                    </div>
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={() => setModalOpen(false)}
                            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 "
                        >
                            Close
                        </button>
                    </div>
                </motion.div>
            </>
        )}
    </AnimatePresence>
    </>
    )
}
export default FavouriteBar
