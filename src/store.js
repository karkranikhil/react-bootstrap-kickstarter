import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const middleware = [thunk]
const enhancer = composeWithDevTools(
  applyMiddleware(...middleware)
)
const store = createStore(rootReducer,enhancer)
// export default function configureStore(initialState={}) {
//  return createStore(
//   rootReducer,enhancer
//  );
// }
export default store