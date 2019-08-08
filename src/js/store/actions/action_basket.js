export function addProductToBasket(id) {
    return {
      type: "ADD_PRODUCT_TO_BASKET",
      payload: {
          id,
          quantity: 1
      }
    }
  }