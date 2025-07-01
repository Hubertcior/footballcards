import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { usePlayerStore, useClubStore } from '../../Stores/playerStore.js';
import questionMark from '../../assets/questionMark.jpg';

const Card = ({ url, text, img, star, isNotLeague, isPlayer }) => {
    const MotionLink = motion(Link);
    const MotionFaStar = motion(FaStar);

    const addPlayer = usePlayerStore(state => state.addPlayer);
    const removePlayer = usePlayerStore(state => state.removePlayer);
    const playerList = usePlayerStore(state => state.playerList);

    const addClub = useClubStore(state => state.addClub);
    const removeClub = useClubStore(state => state.removeClub);
    const clubList = useClubStore(state => state.clubList);

    const isFavPlayer = playerList.some(p => p.name === text);
    const isFavClub = clubList.some(c => c.name === text);

    const handleStarClick = (e) => {
        e.preventDefault();
        if (isFavPlayer || isFavClub) {
            {isPlayer ? removePlayer(text) : removeClub(text)}
        } else {
            {isPlayer ? addPlayer({ name: text, img }) : addClub({ name: text, img })}
        }
    };

    return (
        <MotionLink
            to={url}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`${isNotLeague ? "h-50" : "h-30"} w-60 flex items-center justify-center text-center text-2xl
                 bg-black/70 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.5)] text-white cursor-pointer flex-col relative`}
        >
            {!isNotLeague ? (
                <></>
            ): img === null || img === undefined || img === '' ?(
                <img src={questionMark} alt="questionMark" className="size-25 mb-2" />
            ):(
                <img src={img} alt={text} className="size-25 mb-2" />
            )}
            <p>{text}</p>

            {star && (
                <MotionFaStar
                    onClick={handleStarClick}
                    className="absolute bottom-2 right-2 cursor-pointer"
                    size={30}
                    color={isFavPlayer || isFavClub ? 'yellow' : 'white'}
                    title={isFavPlayer || isFavClub ? 'Usuń z ulubionych' : 'Dodaj do ulubionych'}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    whileTap={{ scale: 0.9, rotate: -15 }}
                />
            )}
        </MotionLink>
    );
};

export default Card;
