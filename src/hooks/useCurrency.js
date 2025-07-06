import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase.js';

export const useCurrency = () => {
    const [amount, setAmount] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCurrency = async () => {
            setLoading(true);

            const { data: userData, error: userError } = await supabase.auth.getUser();

            if (userError || !userData?.user) {
                setError(userError || new Error("Użytkownik niezalogowany"));
                setLoading(false);
                return;
            }

            const userId = userData.user.id;

            const { data, error } = await supabase
                .from('user_currency')
                .select('amount')
                .eq('user_id', userId)
                .single();

            if (error) {
                setError(error);
                setAmount(null);
            } else {
                setAmount(data.amount);
                setError(null);
            }

            setLoading(false);
        };
        fetchCurrency();
    }, []);


    return { amount, loading, error, setAmount };
};

