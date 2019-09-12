import fooddata from './fooddata'

const { food1, food2, food3, food4, food5, food6 } = fooddata

const initialState = {
  navBottomShow: true, // true || false
  navBottomDisplay: "relative", // relative || fixed
  foodItems: {
    f1: food1,
    f2: food2,
    f3: food3,
    f4: food4,
    f5: food5,
    f6: food6,
    // f7: food7,
    // f8: food8,
    // f9: food9,
    // f10: food10,
  }
}

const app = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_NAV_BOTTOM_SHOW':
        return { 
          ...state, 
          navBottomShow: action.payload,
        }
      case 'SET_NAV_BOTTOM_DISPLAY':
          return { 
            ...state, 
            navBottomDisplay: action.payload,
          }
      default:
        return state
    }
  }
  
  export default app