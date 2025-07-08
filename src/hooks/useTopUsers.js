import {useEffect, useState} from "react";
import {supabase} from "@/lib/supabase.js";


export const useTopUsers = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [topUsers, setTopUsers] = useState([]);

    const fetchTopUsers = async () => {
        setLoading(true);
        const {data, error} = await supabase.rpc('get_leaderboard');
        if (error) {
            setError(error);
            setTopUsers([]);
        } else {
            setTopUsers(data);
            setError(null);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchTopUsers();
    }, []);

    return { topUsers, loading, error,};
}