import React, { useState } from 'react';
import PackOpening from "@/components/PackOpening/PackOpening.jsx";
import RequireAuth from "@/components/Login/RequireAuth.jsx";

const PackAnimation = () => {
    const [opened, setOpened] = useState(false);
    const [showPackOpening, setShowPackOpening] = useState(false);

    const handleOpen = () => {
        setOpened(false);
        setShowPackOpening(false);
        setTimeout(() => {
            setShowPackOpening(true);
        }, 1500);
        setOpened(true);
    };

    return (
        <RequireAuth info>
        <div className="flex items-center justify-center  h-[500px]">
            <div className="pack-container flex flex-col items-center justify-center">
                {!opened ? (
                    <div
                        className="pack flex flex-col items-center justify-center bg-white/90 rounded-2xl shadow-2xl p-10 cursor-pointer hover:scale-105 transition-transform duration-300 border-4 border-yellow-300"
                        onClick={handleOpen}
                    >
                        <span className="text-7xl mb-4 animate-bounce">🎁</span>
                        <p className="text-xl font-semibold text-green-800">Kliknij, aby otworzyć paczkę!</p>
                    </div>
                ) : (
                    !showPackOpening && (
                        <div className="pack-opened flex flex-col items-center justify-center bg-white/90 rounded-2xl shadow-2xl p-10 border-4 border-yellow-300">
                            <span className="text-7xl mb-4 animate-pulse">✨</span>
                            <p className="text-xl font-semibold text-green-800 animate-pulse">Otwieranie...</p>
                        </div>
                    )
                )}
                {showPackOpening && (
                    <div className="w-full flex items-center justify-center">
                        <PackOpening />
                    </div>
                )}
            </div>
        </div>
        </RequireAuth>
    );
};

export default PackAnimation;