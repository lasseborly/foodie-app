const initialState = {
    items: {
        f1: {
            id: 'f1',
            quantity: 3
        },
        f2: {
            id: 'f2',
            quantity: 3
        },
        f3: {
            id: 'f3',
            quantity: 3
        },
        f4: {
            id: 'f4',
            quantity: 2
        },
        f5: {
            id: 'f5',
            quantity: 2
        },
        f6: {
            id: 'f6',
            quantity: 6
        },
        // f7: {
        //     id: 'f7',
        //     quantity: 2
        // },
        // f8: {
        //     id: 'f8',
        //     quantity: 2
        // },
        // f9: {
        //     id: 'f9',
        //     quantity: 6
        // },
        // f10: {
        //     id: 'f10',
        //     quantity: 6
        // }
    }
}

const reducer_basket = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case 'ADD_PRODUCT_TO_BASKET':
            const { id } = payload
            const newState = {
                ...state,
                items: {...state.items}
            }
            if (newState.items[id]) {
                newState.items[id] = {
                    ...payload,
                    quantity: newState.items[id].quantity + 1
                }
            } else {
                newState.items[`${id}`] = payload
            }

            return newState

        case 'CLEAR_PRODUCTS_FROM_BASKET':
            return { ...state, items: {} }
        case 'INCREMENT_PRODUCT_FROM_BASKET':
            return {
                ...state, 
                items: {
                    ...state.items, 
                    [payload]: {
                        ...state.items[payload],
                        quantity: ++state.items[payload]["quantity"]
                    }
                }
            }
        case 'DECREMENT_PRODUCT_FROM_BASKET':
            // Remove product if it's the last item
            if (state.items[payload]["quantity"] === 1) {
                const tempDecProFroBas = {
                    ...state,
                    items: {
                        ...state.items
                    }
                }
                delete tempDecProFroBas.items[payload]
                return tempDecProFroBas
            }

            // Subtract a single item
            return {
                ...state, 
                items: {
                    ...state.items, 
                    [payload]: {
                        ...state.items[payload],
                        quantity: --state.items[payload]["quantity"]
                    }
                }
            }
        case 'REMOVE_PRODUCT_FROM_BASKET':
            const tempRemProFroBas = {
                ...state,
                items: {
                    ...state.items
                }
            }
            delete tempRemProFroBas.items[payload]
            return tempRemProFroBas
      default:
        return state
    }
  }
  
  export default reducer_basket