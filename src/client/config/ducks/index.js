import { combineReducers } from 'redux';

import commonAppState from '~/modules/common/state/common.ducks';

const rootDuck = combineReducers({
  commonAppState
});

export default rootDuck;
