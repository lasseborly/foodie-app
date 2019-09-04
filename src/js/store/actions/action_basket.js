export function addProductToBasket(id) {
    return {
      type: "ADD_PRODUCT_TO_BASKET",
      payload: {
          id,
          quantity: 1
      }
    }
  }

export function removeProductFromBasket (id) {
  return {
    type: "REMOVE_PRODUCT_FROM_BASKET",
    payload: id
  }
}

export function clearProductsFromBasket() {
  return {
    type: "CLEAR_PRODUCTS_FROM_BASKET"
  }
}

export function incrementProductFromBasket (id) {
  return {
    type: "INCREMENT_PRODUCT_FROM_BASKET",
    payload: id
  }
}

export function decrementProductFromBasket (id) {
  return {
    type: "DECREMENT_PRODUCT_FROM_BASKET",
    payload: id
  }
}

