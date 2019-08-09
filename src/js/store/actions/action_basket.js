export function addProductToBasket(id) {
    return {
      type: "ADD_PRODUCT_TO_BASKET",
      payload: {
          id,
          quantity: 1
      }
    }
  }

export function clearProductsFromBasket() {
  return {
    type: "CLEAR_PRODUCTS_FROM_BASKET"
  }
}