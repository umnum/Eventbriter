import { combineReducers } from 'redux';
import sessionReducer from '../reducers/session_reducer';
import entitiesReducer from '../reducers/entities_reducer';
import errorsReducer from '../reducers/errors_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer
});

export default rootReducer;