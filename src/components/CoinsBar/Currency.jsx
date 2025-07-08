import React, { useEffect } from 'react';
import { useCurrency } from '@/hooks/useCurrency';
import { supabase } from "@/lib/supabase.js";
import useUserID from "@/hooks/useUserID.js";


const Currency = () => {
    const { amount, setAmount, loading, error } = useCurrency();

    const { userID} = useUserID();

    useEffect(() => {
        if (!userID) return;

        const subscription = supabase
            .channel('any_changes')
            .on(
                'postgres_changes',
                {
                    event: 'UPDATE',
                    schema: 'public',
                    table: 'user_currency',
                },
                (payload) => {
                    if (payload?.new?.user_id === userID && payload?.new?.amount !== undefined) {
                        setAmount(payload.new.amount);
                    }
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(subscription);
        };
    }, [userID, setAmount]);

    if (loading) return <div className="text-gray-500">Loading...</div>;
    if (error) return <div className="text-red-500">Error: {error.message}</div>;

    return (
        <div className="text-xl font-semibold flex items-center gap-2">
            <span>Your coins:</span>
            <span>{amount} 🪙</span>
        </div>
    );
};

export default Currency;
