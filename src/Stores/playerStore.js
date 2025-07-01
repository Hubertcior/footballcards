import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const usePlayerStore = create(devtools(persist((set, get) => ({
    playerList: [],

    addPlayer: (player) => {
        const { playerList } = get();
        const exist = playerList.some(p => p.name === player.name);
        if(!exist) {
            set({ playerList: [...playerList, player] });
        }
    },

    removePlayer: (playerName) => {
        set((state) => ({
            playerList: state.playerList.filter(p => p.name !== playerName)
        }));
    },

    isFavorite: (playerName) => {
        return get().playerList.includes(playerName);
    }
}))));
