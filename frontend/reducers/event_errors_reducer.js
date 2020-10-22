import { RECEIVE_EVENT_ERRORS, CLEAR_EVENT_ERRORS } from '../actions/event_actions';

const eventErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case CLEAR_EVENT_ERRORS:
            return [];
        case RECEIVE_EVENT_ERRORS:
            return Object.values(action.errors.responseJSON);
        default:
            return oldState;
    }
}

export default eventErrorsReducer;