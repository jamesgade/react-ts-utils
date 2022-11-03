const reducer = (state: any, action: any) => {

    switch (action.type) {

        case 'CLEAR_CART':
            return {
                ...state,
                cart: []
            }

        case 'REMOVE':
            return {
                ...state,
                cart: state.cart.filter((cartItem: any) => cartItem.id !== action.payload)
            }

        case 'INCREASE':
            let tempCart = state.cart.map((cartItem: any) => {
                if (cartItem.id === action.payload) {
                    return { ...cartItem, amount: cartItem.amount + 1 }
                }
                return cartItem
            })

            return {
                ...state,
                cart: tempCart
            }

        case 'DECREASE':
            let tempItem = state.cart.map((cartItem: any) => {
                if (cartItem.id === action.payload) {
                    return { ...cartItem, amount: cartItem.amount - 1 }
                }
                return cartItem
            }).filter((cartItem: any) => cartItem.amount !== 0)

            return {
                ...state,
                cart: tempItem
            }

        case 'TOGGLE_AMOUNT':

            let updatedCart = state.cart.map((cartItem: any) => {
                if (cartItem.id === action.payload.id) {

                    if (action.payload.type === 'inc') {
                        return { ...cartItem, amount: cartItem.amount + 1 }
                    }
                    if (action.payload.type === 'dec') {
                        return { ...cartItem, amount: cartItem.amount - 1 }
                    }

                }
                return cartItem

            }).filter((cartItem: any) => cartItem.amount !== 0)

            return {
                ...state,
                cart: updatedCart
            }

        case 'GET_TOTALS':

            let { total, amount } = state.cart.reduce((cartTotal: any, cartItem: any) => {

                const { price, amount } = cartItem;
                const itemTotal = price * amount

                cartTotal.amount += amount
                cartTotal.total += itemTotal

                return cartTotal

            }, { total: 0, amount: 0 })

            total = parseFloat(total.toFixed(2))

            return {
                ...state,
                total,
                amount
            }

        case 'LOADING':

            return {
                ...state,
                loading: true
            }

        case 'FETCH_DATA':

            return {
                ...state,
                cart: action.payload,
                loading: false
            }

        default:
            return state
    }

    // if(action.type === 'CLEAR_CART'){
    //     return {
    //         ...state,
    //         cart: []
    //     }
    // }
    // if (action.type === "REMOVE") {
    //     return {
    //         ...state,
    //         cart: state.cart.filter((item: any) => item.id !== action.payload)
    //     }
    // }
    // if (action.type === "INCREASE") {
    //     let tempCart = state.cart.map((cartItem: any) => {
    //         if (cartItem.id === action.payload) {
    //             return { ...cartItem, amount: cartItem.amount + 1 }
    //         }
    //         return cartItem
    //     })

    //     return {
    //         ...state,
    //         cart: tempCart
    //     }
    // }
    //
    // if (action.type === "DECREASE") {
    //     let tempItem = state.cart.map((cartItem: any) => {
    //         if (cartItem.id === action.payload) {
    //             return { ...cartItem, amount: cartItem.amount - 1 }
    //         }
    //         return cartItem
    //     }).filter((cartItem: any) => cartItem.amount !== 0)

    //     return {
    //         ...state,
    //         cart: tempItem
    //     }
    // }
    // //
    // if (action.type === "GET_TOTALS") {
    //     let { total, amount } = state.cart.reduce((cartTotal: any, cartItem: any) => {
    //         const { price, amount } = cartItem;
    //         const itemTotal = price * amount
    //         cartTotal.amount += amount
    //         cartTotal.total += itemTotal
    //         return cartTotal
    //     }, { total: 0, amount: 0 })
    //     total = parseFloat(total.toFixed(2))
    //
    //     return {
    //         ...state,
    //         total,
    //         amount
    //     }
    // }
    //
    //
    //return state

}

export default reducer;
