import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import FavouriteStar from "@/components/UI/FavouriteStar.jsx";

const Card = ({ url, text, img, star, id ,isNotLeague, isPlayer, playerNumber }) => {
    const MotionLink = motion(Link);

    return (
        <MotionLink
            to={url}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`${isNotLeague ? "h-50" : "h-30"} w-60 flex items-center justify-center text-center text-2xl
                 bg-black/70 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.5)] text-white cursor-pointer flex-col relative`}
        >
            {playerNumber && <h2
                className="absolute -left-16 top-1/2 -translate-y-1/2 text-5xl font-black text-yellow-900 bg-yellow-300 border-2 border-yellow-500 shadow-xl rounded-full px-6 py-2 z-20 select-none"
                style={{
                    textShadow: '0 2px 8px #eab308, 0 1px 1px #fff',
                    filter: 'none',
                    letterSpacing: '0.08em',
                }}
            >
                {playerNumber}
            </h2>}
            {!isNotLeague ? (
                <></>
            ): img === null || img === undefined || img === '' ?(
                <p className="font-bold text-[5rem]">?</p>
            ): isPlayer ?(
                <img src={img} alt={text} className="size-25 mb-2 rounded-full" />
            ):(
                <img src={img} alt={text} className="size-25 mb-2" />
            )}
            <p>{text}</p>

            {star && (
                <FavouriteStar img={img} text={text} id={id} isPlayer={isPlayer}  />
            )}
        </MotionLink>
    );
};

export default Card;
