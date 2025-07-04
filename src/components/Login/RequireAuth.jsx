import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const RequireAuth = ({ children, info }) => {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkSession = async () => {
            const { data } = await supabase.auth.getSession();
            setIsAuthenticated(!!data.session);
            setLoading(false);
        };

        checkSession();
    }, []);

    if (loading) return <p>Loading...</p>;

    if (!isAuthenticated && info) {
        return (
            <div className="text-center py-8">
                <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
                <p className="text-lg">You must be <a href="/login" className="underline text-blue-400" >logged in</a> to view this page.</p>
            </div>
        );
    }
    if (!isAuthenticated) {
        return null;
    }

    return <>{children}</>;
};

export default RequireAuth;
