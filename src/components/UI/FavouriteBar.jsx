import React, { useState } from 'react'
import {usePlayerStore, useClubStore} from "@/Stores/playerStore.js";
import {motion, AnimatePresence} from "motion/react";
import FavouriteSection from "./FavouriteSection.jsx";
import PanelButton from "@/components/UI/PanelButton.jsx";

const FavouriteBar = () => {

    const MotionDiv = motion.div;
    const favPlayers = usePlayerStore(state => state.playerList);
    const favClubs = useClubStore(state => state.clubList);

    const [modalOpen, setModalOpen] = useState(false);

    const ResponsiveText = ({ desktop, mobile }) => (
        <>
            <span className="hidden sm:inline">{desktop}</span>
            <span className="inline sm:hidden">{mobile}</span>
        </>
    );

    return (
        <>
            <PanelButton
                text={<ResponsiveText desktop="⚽ Juggling Game ⚽" mobile="⚽" />}
                url={'/game'}
            />
            <PanelButton
                text={<ResponsiveText desktop="🔝 Best Users 🔝" mobile="🔝" />}
                url={'/top-users'}
            />
            <PanelButton
                text={<ResponsiveText desktop="🎁 Open Pack's 🎁" mobile="🎁" />}
                url={'/pack-opening'}
            />
            <PanelButton
                text={<ResponsiveText desktop="⭐ Favourite Panel ⭐" mobile="⭐" />}
                functionHandler={() => setModalOpen(true)}
            />
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
                    {(favPlayers.length === 0 && favClubs.length === 0) ? (
                        <div className="flex flex-col items-center justify-center h-full">
                            <h2 className="text-2xl font-bold mb-4">You don't have any favorite clubs or players yet!</h2>
                            <p className="text-lg">Please add some players or clubs to your favorites to see them here.</p>
                        </div>
                    ) : (
                        <>
                            <button
                                onClick={() => setModalOpen(false)}
                                className="absolute top-2 right-6 w-10 h-10 flex items-center justify-center bg-red-600 text-white rounded-full text-3xl font-bold shadow hover:bg-red-700 transition z-50 p-0"
                                aria-label="Zamknij"
                                style={{ lineHeight: 1, textAlign: 'center' }}
                            >
                                <span className="flex items-center justify-center w-full h-full">×</span>
                            </button>
                            <div className="flex items-center justify-around flex-row">
                                <FavouriteSection itemsArray={favPlayers} name="player" />
                                <FavouriteSection itemsArray={favClubs} name="club" />
                            </div>
                        </>
                    )}
                </MotionDiv>
            </>
        )}
    </AnimatePresence>
    </>
    )
}
export default FavouriteBar
