import React from 'react'
import {useTopUsers} from "@/hooks/useTopUsers.js";
import Spinner from "@/components/UI/Spinner.jsx";
import Heading from "@/components/UI/Heading.jsx";
import RequireAuth from "@/components/Login/RequireAuth.jsx";

const TopUsers = () => {

    const {topUsers, loading, error} = useTopUsers()

    if (loading) return <Spinner />;
    if (error) return <p>Error: {error.message}</p>;


    return (
        <RequireAuth info>
            <Heading text="Top users"></Heading>
            <ul className="bg-white/80 rounded-xl shadow-lg px-8 py-6 mt-6 flex flex-col items-center w-full max-w-md mx-auto">
                {topUsers.map((user, index) => (
                    <li
                        key={user.email}
                        className="mb-3 last:mb-0 w-full flex items-center justify-between px-4 py-2 rounded-lg bg-green-100/70 hover:bg-green-200 transition"
                    >
                        <span className="font-semibold text-green-900 flex items-center gap-2">
                            {index === 0 && <span className="text-2xl">🥇</span>}
                            {index === 1 && <span className="text-2xl">🥈</span>}
                            {index === 2 && <span className="text-2xl">🥉</span>}
                            {index > 2 && index < 10 && (
                                <span className="text-lg font-bold text-green-700">{index + 1}.</span>
                            )}
                            {user.email}
                        </span>
                        <span className="font-bold text-yellow-600 flex items-center gap-1">
                            {user.amount} <span role="img" aria-label="coins">🪙</span>
                        </span>
                    </li>
                ))}
            </ul>
        </RequireAuth>
    )
}
export default TopUsers
