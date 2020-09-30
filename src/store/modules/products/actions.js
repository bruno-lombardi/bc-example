export function fetchProducts() {
  return {
    type: '@products/FETCH_PRODUCTS',
  };
}

export function setProductsLoading(loading) {
  return {
    type: '@products/SET_PRODUCTS_LOADING',
    payload: { loading },
  };
}

export function fetchProductsSuccess(products) {
  return {
    type: '@products/FETCH_PRODUCTS_SUCCESS',
    payload: { products },
  };
}

export function fetchProductsFail(err) {
  return {
    type: '@products/FETCH_PRODUCTS_FAIL',
    payload: { err },
  };
}
