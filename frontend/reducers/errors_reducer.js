import { combineReducers } from 'redux';
import sessionErrorsReducer from '../reducers/session_errors_reducer';
import sessionErrors from '../reducers/session_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer
});

export default errorsReducer;