import React from 'react';

const QuickSellButton = ({ onClick }) => {
    return (
        <button
            className="
                w-40 h-20
                flex flex-col items-center justify-center
                text-center
                text-white rounded-full
                bg-gradient-to-r from-green-400 via-lime-400 to-yellow-300
                font-bold shadow-lg
                hover:scale-105 hover:shadow-xl
                transition-all duration-200
                active:scale-95
                focus:outline-none focus:ring-2 focus:ring-green-300
            "
            onClick={onClick}
        >
            Quick sell
            <span>(250🪙)</span>
        </button>
    );
};

export default QuickSellButton;