import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import rootReducers from './reducers/rootReducers';
import logger from './logger';
const middleware = [thunk];
const store = createStore(logger(rootReducers), composeWithDevTools(applyMiddleware(...middleware)))
export default store;