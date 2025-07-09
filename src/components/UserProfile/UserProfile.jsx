import React from 'react'
import {useLocation} from "react-router-dom";
import {useAmountByEmail} from "@/hooks/useAmountByEmail.js";


const UserProfile = () => {

    const location =useLocation()

    const pathParts = location.pathname.split('/');
    const email = pathParts.pop();

    const {amount, loading, error } =  useAmountByEmail(email)

    console.log(amount)

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="bg-white/80 rounded-xl shadow-xl p-8 w-full max-w-md flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-green-400 to-blue-400 flex items-center justify-center mb-4 shadow-lg">
                        <span className="text-4xl text-white font-bold">👤</span>
                </div>
                <h2 className="text-2xl font-bold mb-2 text-gray-800">User profile</h2>
                <div className="w-full flex flex-col gap-2 text-gray-700">
                    <div className="flex justify-between">
                        <span className="font-semibold">Email:</span>
                        <span>{email || "brak"}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold">Balance :</span>
                        <span className="font-mono font-bold text-green-600">
                            {!error && (loading ? "..." : amount)} coins</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
