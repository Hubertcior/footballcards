import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export const useAmountByEmail = (email) => {
    const [amount, setAmount] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);



    useEffect(() => {
        if (!email) {
            setAmount(null);
            return;
        }

        const fetchAmount = async () => {
            setLoading(true);
            setError(null);

            const { data, error: rpcError } = await supabase.rpc('get_amount_by_email', {
                p_email: email
            });

            if (rpcError) {
                console.error("Błąd RPC:", rpcError);
                setError(rpcError);
                setAmount(null);
            } else {
                setAmount(data);
            }

            setLoading(false);
        };

        fetchAmount()

    }, [email]);

    return { amount, loading, error };
};