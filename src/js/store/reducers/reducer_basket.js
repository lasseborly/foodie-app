const initialState = {
    items: {
        f1: {
            id: 'f1',
            quantity: 3
        },
        f4: {
            id: 'f4',
            quantity: 2
        },
        f2: {
            id: 'f2',
            quantity: 3
        },
        f3: {
            id: 'f3',
            quantity: 3
        },
        f5: {
            id: 'f5',
            quantity: 2
        },
        f6: {
            id: 'f6',
            quantity: 6
        }
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
      default:
        return state
    }
  }
  
  export default reducer_basket