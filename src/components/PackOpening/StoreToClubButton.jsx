import React from 'react'

const StoreToClubButton = () => {
    return (
        <button
            className="
                w-40 h-20
                flex flex-col items-center justify-center
                text-center
                text-white rounded-full
                bg-gradient-to-r from-blue-500 via-cyan-400 to-gren-300
                font-bold shadow-lg
                hover:scale-105 hover:shadow-xl
                transition-all duration-200
                active:scale-95
                focus:outline-none focus:ring-2 focus:ring-green-300
            "
        >
            Store to Club
        </button>
    )
}
export default StoreToClubButton

