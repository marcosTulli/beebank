import { create } from "zustand";

interface SidebarState {
  isSideBarOpen: boolean;
  toggleSideBar: () => void;
  setSideBarOpen: (open: boolean) => void;
}

export const sidebarStore = create<SidebarState>((set) => ({
  isSideBarOpen: true,
  toggleSideBar: () =>
    set((state) => ({ isSideBarOpen: !state.isSideBarOpen })),
  setSideBarOpen: (open: boolean) => set({ isSideBarOpen: open }),
}));
