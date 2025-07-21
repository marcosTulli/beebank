import { sidebarStore } from '@/store/ui'

export const useSidebar = () => {
    const {isSideBarOpen, setSideBarOpen, toggleSideBar} = sidebarStore()
  return { 
    isSideBarOpen, setSideBarOpen, toggleSideBar
   }
}

