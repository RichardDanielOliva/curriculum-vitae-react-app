import { combineReducers } from 'redux';

import skillReducer from './skill/skill.reducer';
import OthersReducer from './others/others.reducer';

export default combineReducers({
  skill: skillReducer,
  others: OthersReducer
});