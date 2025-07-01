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
}), { name: 'player-storage' })));

export const useClubStore = create(devtools(persist((set, get) => ({
    clubList: [],

    addClub: (club) => {
        const { clubList } = get();
        const exist = clubList.some(c => c.name === club.name);
        if(!exist) {
            set({ clubList: [...clubList, club] });
        }
    },

    removeClub: (clubName) => {
        set((state) => ({
            clubList: state.clubList.filter(c => c.name !== clubName)
        }));
    },

    isFavoriteClub: (clubName) => {
        return get().clubList.includes(clubName);
    }
}), { name: 'club-storage' })));
