import { useState, useEffect, useRef } from 'react';

export const useFetch = (url) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const dataRef = useRef(null);

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Coś poszło nie tak z fetchowaniem!');
                }
                const json = await response.json();
                dataRef.current = json;
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data: dataRef.current, loading, error };
};