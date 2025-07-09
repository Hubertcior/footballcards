import React, {useEffect, useState} from 'react'
import {useCurrencyStore} from "@/Stores/currencyStore.js";

const GAME_DURATION = 10;

const Game = () => {
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
    const [isActive, setIsActive] = useState(false);
    const [multiplier, setMultiplier] = useState(1);
    const [showMultiplier, setShowMultiplier] = useState(false);

    const {addToAmount} = useCurrencyStore()


    useEffect(() => {
        let timer = null;
        if (isActive && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isActive, timeLeft]);


    useEffect(() => {
        let multiplierTimer = null;
        if (isActive) {
            const randomInterval = Math.random() * 3000 + 2000;
            multiplierTimer = setInterval(() => {
                const newMultiplier = Math.random() > 0.7 ? 3 : 2;
                setMultiplier(newMultiplier);
                setShowMultiplier(true);
                setTimeout(() => {
                    setMultiplier(1);
                    setShowMultiplier(false);
                }, 1500);
            }, randomInterval);
        }
        return () => clearInterval(multiplierTimer);
    }, [isActive]);


    const startGame = () => {
        setScore(0);
        setTimeLeft(GAME_DURATION);
        setIsActive(true);
        setMultiplier(1);
    };

    const handleBallClick = () => {
        if (isActive) {
            setScore((prevScore) => prevScore + 1 * multiplier);
        }
    };

    useEffect(() => {
        if (!isActive && timeLeft === 0 && score > 0) {
            addToAmount(score);
        }
    }, [isActive, timeLeft, score, addToAmount]);

    return (
        <div className="flex items-center justify-center h-[600px]">
            <div className="bg-white/90 rounded-3xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center">
                <h1 className="text-3xl font-extrabold text-green-700 mb-6 tracking-wide drop-shadow">Juggling Clicker</h1>
                <div className="flex justify-between w-full mb-6 px-2">
                    <span className="text-lg font-semibold text-gray-700">
                        Score: <span className="font-bold text-green-600">{score}</span>
                    </span>
                    <span className="text-lg font-semibold text-gray-700">
                        Time: <span className="font-bold text-blue-600">{timeLeft}s</span>
                    </span>
                </div>
                <div className="relative flex flex-col items-center mb-8 min-h-[120px] w-full">
                    {showMultiplier && (
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-yellow-400 text-white font-bold px-5 py-2 rounded-full shadow-lg text-lg animate-bounce border-2 border-yellow-600 z-10">
                            Multiplier x{multiplier}!
                        </div>
                    )}
                    <div
                        className={`transition-all duration-150 select-none cursor-pointer flex items-center justify-center text-7xl md:text-8xl shadow-lg rounded-full bg-gradient-to-t from-green-400 to-blue-300 border-4 border-white hover:scale-110 active:scale-95 ${isActive ? 'animate-bounce' : 'opacity-60 pointer-events-none'}`}
                        style={{ width: 120, height: 120 }}
                        onClick={handleBallClick}
                    >
                        ⚽
                    </div>
                </div>
                {!isActive && timeLeft === 0 && (
                    <div className="flex flex-col items-center gap-2">
                        <h2 className="text-2xl font-bold text-red-600 mb-1">Game over!</h2>
                        <p className="text-lg text-gray-700 mb-2">Your score: <span className="font-bold text-green-700">{score}</span></p>
                        <button
                            onClick={startGame}
                            className="px-6 py-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold shadow-md hover:scale-105 transition-all"
                        >
                            Zagraj jeszcze raz
                        </button>
                    </div>
                )}
                {!isActive && timeLeft === GAME_DURATION && (
                    <button
                        onClick={startGame}
                        className="px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold shadow-md hover:scale-105 transition-all mt-4"
                    >
                        Start
                    </button>
                )}
            </div>
        </div>
    );
}
export default Game
