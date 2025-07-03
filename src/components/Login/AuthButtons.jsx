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
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                    Logout
                </button>
            ) : (
                <>
                    <a
                        href="/login"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                    >
                        Log in
                    </a>
                    <a
                        href="/signup"
                        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
                    >
                        Sign up
                    </a>
                </>
            )}
        </div>
    );
};

export default AuthButtons;