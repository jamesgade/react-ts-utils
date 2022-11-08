import { useState, useContext, useEffect, createContext, useCallback, SetStateAction, Dispatch } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

interface AppContextType {
  loading: boolean
  searchTerm: string
  cocktails: {}[]
  setSearchTerm: Dispatch<SetStateAction<string>>
}

const AppContext = createContext({} as AppContextType)

const AppProvider = ({ children }: any) => {

  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([])

  const fetchDrinks = useCallback(async () => {

    setLoading(true)

    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      const { drinks } = data

      if (drinks) {

        const newCoctails = drinks.map((drink: any) => {

          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass
          } = drink;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass
          }
        })

        setCocktails(newCoctails)

      } else {
        setCocktails([])
      }
      setLoading(false)

    } catch (error) {
      console.log(error);
      setLoading(false)
    }

  }, [searchTerm])

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks])

  return (
    <AppContext.Provider
      value={{
        loading,
        searchTerm,
        cocktails,
        setSearchTerm
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
