import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase.js";

export default function useUserID() {
    const [userID, setUserID] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            const { data, error } = await supabase.auth.getUser();
            if (error) {
                setError(error);
            } else {
                setUserID(data.user?.id);
            }
            setLoading(false);
        };
        getUser();
    }, []);

    return { userID, loading, error };
}
