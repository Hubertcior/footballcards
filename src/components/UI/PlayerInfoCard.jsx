import React from 'react'
import FavouriteStar from './FavouriteStar'

const PlayerInfoCard = ({
    playerName,
    playerImage,
    playerDescription,
    playerPosition,
    playerNationality,
    playerDateBorn,
    playerHeight,
    playerWeight,
    playerTeam,
    playerBirthLocation,
    playerIDNumber,
    playerNumber,
}) => {
    return (
        <div className="w-full max-w-3xl mx-auto rounded-3xl shadow-2xl overflow-hidden flex flex-col items-center p-22 border-2 border-green-300 relative"
             style={{ background: 'rgba(74, 222, 128, 0.85)' }}>
            <div className="absolute top-12 right-0 z-30">
                <FavouriteStar
                    isPlayer
                    id={playerIDNumber}
                    img={playerImage}
                    text={playerName}
                />
            </div>
            <div className="w-44 h-44 -mt-20 mb-4 flex justify-center items-center bg-gradient-to-b from-green-100/80 to-green-300/80 rounded-full shadow-xl border-4 border-green-400 relative">
                {playerNumber && (
                    <span className="absolute -top-3 -left-7 bg-yellow-400 text-green-900 text-3xl font-extrabold rounded-full border-4 border-white shadow-lg px-5 py-2 select-none">
                        {playerNumber}
                    </span>
                )}
                {
                    playerImage ?
                        <img
                            src={playerImage}
                            alt={playerName}
                            className="w-40 h-40 rounded-full object-center object-cover"
                        />
                    : (
                        <p className="text-6xl font-bold text-gray-700">?</p>
                    )
                }


            </div>
            <h1 className="text-4xl font-extrabold text-white mb-2">{playerName}</h1>
            <div className="flex flex-wrap gap-3 items-center text-base text-white mb-3">
                <span className="bg-green-400/70 px-3 py-1 rounded font-semibold">{playerPosition}</span>
                <span className="bg-green-600/60 px-3 py-1 rounded">
                    {playerNationality}
                </span>
                <span className="bg-green-800/60 px-3 py-1 rounded">
                    {playerTeam}
                </span>
            </div>
            <div className="flex flex-wrap gap-8 mt-2 text-white text-base justify-center mb-2">
                <div>
                    <span className="font-semibold">Born:</span> {playerDateBorn}
                </div>
                <div>
                    <span className="font-semibold">Place:</span> {playerBirthLocation}
                </div>
            </div>
            <div className="flex gap-8 text-white text-base justify-center mb-4">
                <div>
                    <span className="font-semibold">Height:</span> {playerHeight}
                </div>
                <div>
                    <span className="font-semibold">Weight:</span> {playerWeight}
                </div>
            </div>
            <p className="mt-2 text-white text-lg italic text-center max-w-2xl">{playerDescription}</p>
        </div>
    )
}

export default PlayerInfoCard
