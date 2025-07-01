import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const usePlayerStore = create(devtools(persist((set, get) => ({
    playerList: [],

    addPlayer: (player) => {
        const { playerList } = get();
        const exist = playerList.some(p => p.id === player.id);
        if(!exist) {
            set({ playerList: [...playerList, player] });
        }
    },

    removePlayer: (id) => set((state) => ({
        playerList: state.playerList.filter(player => player.id !== id)
    })),

    isFavorite: (playerName) => {
        return get().playerList.includes(playerName);
    }
}), { name: 'player-storage' })));

export const useClubStore = create(devtools(persist((set, get) => ({
    clubList: [],

    addClub: (club) => {
        const { clubList } = get();
        const exist = clubList.some(c => c.id === club.id);
        if(!exist) {
            set({ clubList: [...clubList, club] });
        }
    },

    removeClub: (id) => set((state) => ({
        clubList: state.clubList.filter(club => club.id !== id)
    })),

    isFavoriteClub: (clubName) => {
        return get().clubList.includes(clubName);
    }
}), { name: 'club-storage' })));
