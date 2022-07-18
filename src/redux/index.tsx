import { combineReducers } from 'redux';
import commonReducer from './feature/common/commonSlice';

const reducer = combineReducers({
  common: commonReducer
});
export type RootState = ReturnType<typeof reducer>;

export default reducer;
