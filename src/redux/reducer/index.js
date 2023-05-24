import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import GlobalReducer from './globalReducer';

const AllReducers = combineReducers({
  global: GlobalReducer,
  login: LoginReducer,
});

export default AllReducers;
