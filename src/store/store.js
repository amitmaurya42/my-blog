import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import  AuthReducers  from '../reducers/AuthReducers';
const rootReducer = combineReducers({
    auth:AuthReducers
})
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );

export default store;