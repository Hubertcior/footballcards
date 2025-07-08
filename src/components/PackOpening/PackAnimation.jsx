import React, {useState} from 'react';
import PackOpening from "@/components/PackOpening/PackOpening.jsx";
import RequireAuth from "@/components/Login/RequireAuth.jsx";
import Spinner from "@/components/UI/Spinner.jsx";
import {useCurrencyStore} from "@/Stores/currencyStore.js";


const PackAnimation = () => {

    const {attemptPurchase, addToAmount, loadingInitial, amount} = useCurrencyStore();

    const [opened, setOpened] = useState(false);
    const [showPackOpening, setShowPackOpening] = useState(false);

    const handleOpen = async () => {
        const wasSuccessful = await attemptPurchase(500);
        if(wasSuccessful){
            setOpened(false);
            setShowPackOpening(false);

            setTimeout(() => {
                setShowPackOpening(true);
            }, 1500);
            setOpened(true);
        }
    };

    const handleOpenAgain = () => {
        addToAmount(250);
        setOpened(false);
        setShowPackOpening(false);
    };

    return (
        <RequireAuth info>
            {!loadingInitial ? (
                <div className="flex items-center justify-center h-[500px]">
                    <div className="pack-container flex flex-col items-center justify-center">
                        {!opened ? (
                            <div
                                className={`pack flex flex-col items-center justify-center bg-white/90 rounded-2xl shadow-2xl p-10 cursor-pointer hover:scale-105 transition-transform duration-300 border-4 border-yellow-300 ${amount < 500 ? 'opacity-50 cursor-not-allowed hover:scale-100' : ''}`}
                                onClick={handleOpen}
                            >
                                <span className="text-7xl mb-4 animate-bounce">🎁</span>
                                <p className="text-xl font-semibold text-green-800">Click to open!</p>
                                <p><b>500</b>🪙</p>
                                {amount < 500 && (
                                    <p className="text-red-600 font-bold mt-2">You don't have enough coins</p>
                                )}
                            </div>
                        ) : (
                            !showPackOpening && (
                                <div className="pack-opened flex flex-col items-center justify-center bg-white/90 rounded-2xl shadow-2xl p-10 border-4 border-yellow-300">
                                    <span className="text-7xl mb-4 animate-pulse">✨</span>
                                    <p className="text-xl font-semibold text-green-800 animate-pulse">Opening...</p>
                                </div>
                            )
                        )}
                        {showPackOpening && (
                            <div className="w-full flex items-center justify-center">
                                <PackOpening onOpenAgain={handleOpenAgain} />
                            </div>
                        )}
                    </div>
                </div>
            ) : (<Spinner />)}
        </RequireAuth>
    );
};

export default PackAnimation;