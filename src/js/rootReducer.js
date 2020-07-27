import { combineReducers } from 'redux';
import PSNReducer from './views/Plastation/reducer';
import XBLReducer from './views/Xbox/reducer';

const rootReducer = combineReducers({
    psn: PSNReducer,
    xbl: XBLReducer
});

export default rootReducer;