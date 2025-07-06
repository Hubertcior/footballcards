import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export const useSetCurrency = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const fetchUserId = async () => {
            const { data: userData, error: userError } = await supabase.auth.getUser();
            if (!userError && userData.user) {
                setUserId(userData.user.id);
            } else {
                setError(userError || new Error("Nie udało się pobrać użytkownika"));
            }
        };

        fetchUserId();
    }, []);

    const updateAmount = async (delta) => {
        if (!userId) {
            setError(new Error("Brak userId"));
            return null;
        }

        setLoading(true);

        const { data, error: rpcError } = await supabase.rpc('update_user_currency', {
            p_user_id: userId,
            p_delta: delta
        });

        if (rpcError) {
            setError(rpcError);
            setLoading(false);
            return null;
        }

        setError(null);
        setLoading(false);

        return data ?? null;
    };

    const addAmount = (value) => updateAmount(value);
    const subtractAmount = (value) => updateAmount(-value);

    return {
        addAmount,
        subtractAmount,
        loading,
        error,
    };
};
