import React from 'react'

const PlayerCard = ({
    name,
    attackAttribute,
    midfieldAttribute,
    defenceAttribute,
    club,
    country,
    image // nowy props
}) => {
    return (
        <div className="w-64 bg-gradient-to-br from-green-300 to-green-600 rounded-2xl shadow-xl p-4 flex flex-col items-center relative border-4 border-white">
            <div className="absolute top-2 left-2 bg-white/80 rounded px-3 py-1 text-xs font-bold text-green-800 shadow">
                {country}
            </div>
            <div className="absolute top-2 right-2 bg-white/80 rounded px-3 py-1 text-xs font-bold text-green-800 shadow">
                {club}
            </div>
            <div className="w-24 h-24 rounded-full bg-white/80 flex items-center justify-center shadow-lg mt-6 mb-4 overflow-hidden border-2 border-green-700">
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        className="object-cover w-full h-full"
                    />
                ) : (
                    <span className="text-5xl font-extrabold text-green-700">?</span>
                )}
            </div>
            <div className="mb-4 text-2xl font-extrabold text-white drop-shadow-lg text-center">
                {name}
            </div>
            <div className="flex justify-between w-full mt-4 mb-2">
                <div className="flex flex-col items-center flex-1">
                    <span className="text-lg font-bold text-white">ATK</span>
                    <span className="text-2xl font-extrabold text-yellow-300">{attackAttribute}</span>
                </div>
                <div className="flex flex-col items-center flex-1">
                    <span className="text-lg font-bold text-white">MID</span>
                    <span className="text-2xl font-extrabold text-yellow-300">{midfieldAttribute}</span>
                </div>
                <div className="flex flex-col items-center flex-1">
                    <span className="text-lg font-bold text-white">DEF</span>
                    <span className="text-2xl font-extrabold text-yellow-300">{defenceAttribute}</span>
                </div>
            </div>
        </div>
    )
}

export default PlayerCard
