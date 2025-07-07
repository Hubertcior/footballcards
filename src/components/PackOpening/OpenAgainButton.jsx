import React from 'react'

const OpenAgainButton = ({ onClick }) => {
    return (
        <button
            className="px-8 py-3 rounded-full bg-gradient-to-r from-green-400 via-lime-400 to-yellow-300 text-white font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-300"
            onClick={onClick}
        >
            Open again
        </button>
    )
}
export default OpenAgainButton
