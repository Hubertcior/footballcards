import React from 'react'
import {motion} from "motion/react";
import {FaStar} from "react-icons/fa";
import {useClubStore, usePlayerStore} from "@/Stores/playerStore.js";

const FavouriteStar = ({text, isPlayer, img, id}) => {

    const MotionFaStar = motion(FaStar);

    const addPlayer = usePlayerStore(state => state.addPlayer);
    const removePlayer = usePlayerStore(state => state.removePlayer);

    const addClub = useClubStore(state => state.addClub);
    const removeClub = useClubStore(state => state.removeClub);

    const playerList = usePlayerStore(state => state.playerList);
    const clubList = useClubStore(state => state.clubList);

    const isFavPlayer = playerList.some(p => p.name === text);
    const isFavClub = clubList.some(c => c.name === text);

    const handleStarClick = (e) => {
        e.preventDefault();
        if (isFavPlayer || isFavClub) {
            {isPlayer ? removePlayer(id) : removeClub(id)}
        } else {
            {isPlayer ? addPlayer({ name: text, img, id, }) : addClub({ name: text, img, id, })}
        }
    };

    return (
        <MotionFaStar
            onClick={handleStarClick}
            className="absolute bottom-2 right-2 cursor-pointer"
            size={30}
            color={isFavPlayer || isFavClub ? 'yellow' : 'white'}
            title={isFavPlayer || isFavClub ? 'Usuń z ulubionych' : 'Dodaj do ulubionych'}
            whileHover={{ scale: 1.2, rotate: 15 }}
            whileTap={{ scale: 0.9, rotate: -15 }}
        />
    )
}
export default FavouriteStar
