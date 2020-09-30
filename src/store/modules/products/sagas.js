import { takeLatest, call, put, all, select } from 'redux-saga/effects';

import api from '../../../services/api';
import {
  setProductsLoading,
  fetchProductsSuccess,
  fetchProductsFail,
} from './actions';

export function* fetchProductsRequest() {
  try {
    const existingProducts = yield select((state) => state.products.list);
    console.tron.log('products', existingProducts);
    if (existingProducts && !existingProducts.length) {
      yield put(setProductsLoading(true));
    }

    const response = yield call(api.get, '/example/products');
    const products = response.data;
    yield put(fetchProductsSuccess(products));
  } catch (err) {
    yield put(fetchProductsFail(err));
  } finally {
    yield put(setProductsLoading(false));
  }
}

export default all([
  takeLatest('@products/FETCH_PRODUCTS', fetchProductsRequest),
]);
