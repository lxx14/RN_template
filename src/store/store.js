import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from '../redux/rootReducer';
//import { composeWithDevTools } from 'remote-redux-devtools';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];

const store = createStore(rootReducer, compose(composeWithDevTools(applyMiddleware(...middleware))));

export default store;