import { create } from 'zustand';
import { supabase } from '@/lib/supabase';

export const useCurrencyStore = create((set, get) => ({

    amount: null,
    loadingInitial: true,
    loadingAction: false,
    error: null,

    fetchCurrency: async () => {
        set({ loadingInitial: true, error: null });

        const { data: { user } } = await supabase.auth.getUser();

        if (!user) {
            set({ error: "Użytkownik niezalogowany", loadingInitial: false, amount: null });
            return;
        }

        const { data, error } = await supabase
            .from('user_currency')
            .select('amount')
            .eq('user_id', user.id)
            .single();

        if (error) {
            set({ error: error.message, loadingInitial: false, amount: null });
        } else {
            set({ amount: data.amount, loadingInitial: false });
        }
    },


    attemptPurchase: async (cost) => {
        set({ loadingAction: true, error: null });
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) {
            set({ error: "Brak ID użytkownika", loadingAction: false });
            return false;
        }

        const { data: wasSuccessful, error: rpcError } = await supabase.rpc('update_user_currency', {
            p_user_id: user.id,
            p_cost: cost
        });

        if (rpcError) {
            set({ error: rpcError.message, loadingAction: false });
            return false;
        }

        if (wasSuccessful) {
            set(state => ({
                amount: state.amount - cost,
                loadingAction: false
            }));
        } else {
            set({ loadingAction: false });
        }

        return wasSuccessful;
    },


    addToAmount: (value) => {
        return get().attemptPurchase(-value);
    }

}));