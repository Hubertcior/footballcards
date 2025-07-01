import React from 'react'
import {usePlayerStore, useClubStore} from "../../Stores/playerStore.js";
import {motion} from "motion/react";
import {MdDelete} from "react-icons/md";

const FavouriteSection = ({itemsArray, name}) => {

    const MotionDelete = motion(MdDelete);

    const isPlural = (arr) => arr.length > 1;
    const isEmpty = (arr) => arr.length === 0;

    return (
        <div className="flex flex-col">
        <h2 className="text-2xl font-bold mb-4">{!isEmpty(itemsArray) && (
            <p>Your favourite {isPlural(itemsArray) ? `${name}s` : name}</p>
        )}
        </h2>
            <ul className="space-y-2">
            {itemsArray.map((club, i) => (
                <li key={i} className="flex items-center gap-4">
                    <img
                        src={club.img}
                        alt={club.name}
                        className="w-12 h-12  object-cover"
                    />
                    <span>{club.name}</span>
                    <MotionDelete
                        className="text-red-500 cursor-pointer"
                        size={24}
                        onClick={name === 'player' ? () => usePlayerStore.getState().removePlayer(club.name) : () => useClubStore.getState().removeClub(club.name)}
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        whileTap={{ scale: 0.9, rotate: -15 }}
                        title="Remove from favourites"/>
                </li>
            ))}
            </ul>
        </div>
    )
}
export default FavouriteSection
