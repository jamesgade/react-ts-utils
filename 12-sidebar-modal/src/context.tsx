import { useState, useContext, createContext } from 'react'
import AppContextType from './interfaces/AppContextType';

export const AppContext = createContext({} as AppContextType)

const AppProvider = ({ children }: any) => {

    const [showSidebar, setShowSidebar] = useState(false);
    const [showModal, setShowModal] = useState(false)

    const openSidebar = () => setShowSidebar(true)
    const closeSidebar = () => setShowSidebar(false)
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false)

    return (
        <AppContext.Provider
            value={{
                showSidebar,
                showModal,
                openSidebar,
                closeSidebar,
                openModal,
                closeModal
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export default AppProvider
