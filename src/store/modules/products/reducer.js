import produce from 'immer';

const INITIAL_STATE = {
  list: [],
  loading: false,
};

export default function productsReducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@products/SET_PRODUCTS_LOADING':
        draft.loading = action.payload.loading;
        break;
      case '@products/FETCH_PRODUCTS_SUCCESS':
        draft.loading = false;
        draft.list = action.payload.products;
        break;
      case '@products/FETCH_PRODUCTS_FAIL':
        draft.loading = false;
        draft.list = [];
        break;
      default:
        break;
    }
  });
}
