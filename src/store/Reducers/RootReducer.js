import { combineReducers } from 'redux';

import Reducer from './reducer';
import swap from './Swap';

const rootReducer = combineReducers({
  Reducer,
  swap
});

export default rootReducer;
