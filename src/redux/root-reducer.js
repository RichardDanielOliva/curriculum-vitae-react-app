import { combineReducers } from 'redux';

import skillReducer from './skill/skill.reducer';
import OthersReducer from './others/others.reducer';
import NavigationReducer from './navigation/navigation.reducer';

export default combineReducers({
  skill: skillReducer,
  others: OthersReducer,
  navigation: NavigationReducer
});