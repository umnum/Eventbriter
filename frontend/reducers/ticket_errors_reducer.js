import { RECEIVE_TICKET_ERRORS, CLEAR_TICKET_ERRORS } from '../actions/ticket_actions';

const ticketErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case CLEAR_TICKET_ERRORS:
            return [];
        case RECEIVE_TICKET_ERRORS:
            return Object.values(action.errors.responseJSON);
        default:
            return oldState;
    }
}

export default ticketErrorsReducer;