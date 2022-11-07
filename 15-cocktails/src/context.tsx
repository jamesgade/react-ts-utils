import { useState, useContext, useEffect, createContext, useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

interface AppContextType {
  name: string
}

const AppContext = createContext({} as AppContextType)

const AppProvider = ({ children }: any) => {
  return (
    <AppContext.Provider
      value={{name: "james"}}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
