import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import eventErrorsReducer from './event_errors_reducer';
import ticketErrorsReducer from './ticket_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    event: eventErrorsReducer,
    ticket: ticketErrorsReducer
});

export default errorsReducer;