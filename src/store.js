import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

//const middleware = applyMiddleware(thunkMiddleware)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = //compose(middleware)(reducers)(createStore);
createStore(reducers, applyMiddleware(thunk))

export default store;
