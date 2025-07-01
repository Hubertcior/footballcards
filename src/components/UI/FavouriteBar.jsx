import React, { useState, useEffect } from 'react'
import {usePlayerStore} from "../../Stores/playerStore.js";
import {motion, AnimatePresence} from "motion/react";
import { MdDelete } from "react-icons/md";


const FavouriteBar = () => {

    const MotionDiv = motion.div;
    const MotionDelete = motion(MdDelete);
    const favPlayers = usePlayerStore(state => state.playerList);

    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        if (modalOpen && favPlayers.length === 0) {
            setModalOpen(false);
        }
    }, [favPlayers, modalOpen]);

    if(favPlayers.length === 0) return null;

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
                    className="fixed bottom-0 left-0 right-0 bg-green-400 rounded-t-2xl p-6 max-h-[70vh] overflow-auto z-50"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                >
                    <h2 className="text-2xl font-bold mb-4">Your favourite</h2>
                    <ul className="space-y-2">
                        {favPlayers.map((player, i) => (
                            <li key={i} className="flex items-center gap-4">
                                <img
                                    src={player.img}
                                    alt={player.name}
                                    className="w-12 h-12  object-cover"
                                />
                                <span>{player.name}</span>
                                <MotionDelete
                                    className="text-red-500 cursor-pointer"
                                    size={24}
                                    onClick={() => usePlayerStore.getState().removePlayer(player.name)}
                                    whileHover={{ scale: 1.2, rotate: 15 }}
                                    whileTap={{ scale: 0.9, rotate: -15 }}
                                    title="Remove from favourites"/>

                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={() => setModalOpen(false)}
                        className="mt-6 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
                    >
                        Close
                    </button>
                </motion.div>
            </>
        )}
    </AnimatePresence>
    </>
    )
}
export default FavouriteBar
