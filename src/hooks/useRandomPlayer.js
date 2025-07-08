import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export const useRandomPlayer = () => {
    const [player, setPlayer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRandomPlayer = async () => {
        setLoading(true);
        setError(null);

        const { data, error } = await supabase.rpc("get_random_player");

        console.log("data:", data);
        console.log("error:", error);

        if (error) {
            setError(error);
            setPlayer(null);
        } else if (data?.length > 0) {
            setPlayer(data[0]);
        } else {
            setPlayer(null);
        }

        setLoading(false);
    };

    useEffect(() => {
        fetchRandomPlayer();
    }, []);

    return { player, loading, error, refetch: fetchRandomPlayer };
};
