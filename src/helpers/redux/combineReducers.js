import {combineReducers} from 'redux';
import {DataScreenReducer} from '../../components/dataScreen/reducers';

const rootReducer = combineReducers({
  DataReducer: DataScreenReducer,
});

export default rootReducer;
