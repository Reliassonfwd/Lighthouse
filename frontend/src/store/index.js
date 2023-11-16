import { createStore, combineReducers } from 'redux';
import authReducer from '../reducers/auth';

const rootReducer = combineReducers({
  auth: authReducer,
  // ...otros reductores si los tienes
});

const store = createStore(rootReducer);

export default store;
