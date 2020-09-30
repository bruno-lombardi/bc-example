import { all } from 'redux-saga/effects';

// import exemple from './exemple/sagas';
import products from './products/sagas';

export default function* rootSaga() {
  return yield all([products]);
}
