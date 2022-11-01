interface AppContextType {
    showModal: boolean
    showSidebar: boolean
    openSidebar: () => void
    closeSidebar: () => void
    openModal: () => void
    closeModal: () => void
}

export default AppContextType;
