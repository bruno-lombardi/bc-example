import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'bc-products',
      storage,
      whitelist: ['products'],
    },
    reducers
  );

  return persistedReducer;
};
