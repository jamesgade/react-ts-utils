import { useContext, useReducer, useEffect, createContext } from 'react'
// import cartItems from './data'
import reducer from './reducer'

const url = 'https://course-api.com/react-useReducer-cart-project'

interface AppContextType {
  cart: any
  amount: number
  loading: boolean
  total: number
  clearCart: () => void
  removeItem: (id: string) => void
  increase: (id: string) => void
  decrease: (id: string) => void
  toggleAmount: (id: string, type: string) => void
}

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0
}

const AppContext = createContext({} as AppContextType)

const AppProvider = ({ children }: any) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchData = async () => {
    dispatch({ type: 'LOADING' })
    const response = await fetch(url);
    const cart = await response.json()
    dispatch({ type: "FETCH_DATA", payload: cart })
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' })
  }, [state.cart])

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE', payload: id })
  }

  const increase = (id: string) => {
    dispatch({ type: 'INCREASE', payload: id })
  }

  const decrease = (id: string) => {
    dispatch({ type: 'DECREASE', payload: id })
  }

  const toggleAmount = (id: string, type: string) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increase,
        decrease,
        toggleAmount
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
