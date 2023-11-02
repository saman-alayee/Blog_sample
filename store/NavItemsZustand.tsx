import { create } from 'zustand'

export const useChangeActive = create<ChangeActive>((set) => ({
    activeItem: "Home",
    change: (arg) => set(() => ({ activeItem: arg })),
}));