import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase.js";

export const useRandomPlayer = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [player, setPlayer] = useState()

    const fetchRandomPlayer = async () => {
        setLoading(true);
        const { data, error } = await supabase.rpc("get_random_player");
        if (error) {
            setError(error);
        } else {
            setPlayer(data[0])
            setError(null);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchRandomPlayer();
    }, []);

    return { player , loading, error, refetch: fetchRandomPlayer };
};
