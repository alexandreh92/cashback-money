import { createStore, compose, applyMiddleware, Store } from 'redux';

import { ApplicationState } from '~/@types';

export default (reducers: any, middlewares: any) => {
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares);

  const store: Store<ApplicationState> = createStore(reducers, enhancer);

  return store;
};
