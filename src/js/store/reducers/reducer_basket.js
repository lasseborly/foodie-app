const initialState = {
    items: {}
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
      default:
        return state
    }
  }
  
  export default reducer_basket