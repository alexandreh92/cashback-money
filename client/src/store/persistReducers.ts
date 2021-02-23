import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

export default (reducers: any) => {
  const persistedReducer = persistReducer(
    {
      key: 'lemoneyTest',
      storage: storage,
      whitelist: ['auth', 'theme', 'user'],
      stateReconciler: autoMergeLevel2,
    },
    reducers
  );

  return persistedReducer;
};
