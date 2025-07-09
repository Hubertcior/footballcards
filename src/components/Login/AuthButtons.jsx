import React, { useEffect, useState } from 'react';
import { supabase } from "@/lib/supabase.js";

const AuthButtons = () => {
    const [session, setSession] = useState(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => setSession(data.session));
        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
        return () => listener.subscription.unsubscribe();
    }, []);

    const handleLogout = async () => {
        await supabase.auth.signOut();
    };
    return (
        <div className="flex gap-2">
            {session ? (
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-3 py-2 rounded-3xl shadow-md text-sm md:px-6 md:py-3 md:text-base hover:bg-red-600 transition cursor-pointer flex items-center justify-center"
                >
                    Logout
                </button>
            ) : (
                <>
                    <a
                        href="/login"
                        className="bg-green-600 text-white px-3 py-2 rounded-3xl shadow-md text-sm md:px-6 md:py-3 md:text-base hover:bg-green-700 transition cursor-pointer flex items-center justify-center"
                    >
                        Log in / Register
                    </a>
                </>
            )}
        </div>
    );
};

export default AuthButtons;