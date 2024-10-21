import { create } from "zustand";

type SidebarStore = {
  isSideBarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
};

const useSidebar = create<SidebarStore>((set) => ({
  isSideBarOpen: false,
  openSidebar: () => set({ isSideBarOpen: true }),
  closeSidebar: () => set({ isSideBarOpen: false }),
}));

export default useSidebar;
