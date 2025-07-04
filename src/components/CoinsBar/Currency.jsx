import React from 'react';
import { useCurrency } from '@/hooks/useCurrency';

const Currency = () => {
    const { amount, loading, error } = useCurrency();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="text-xl font-semibold">
            Your coins: <span className="text-green-600">{amount} 🪙</span>
        </div>
    );
};

export default Currency;
