import { RECEIVE_PURCHASED_TICKET_ERRORS, CLEAR_PURCHASED_TICKET_ERRORS } from '../actions/purchased_ticket_actions';

const purchasedTicketErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case CLEAR_PURCHASED_TICKET_ERRORS:
            return [];
        case RECEIVE_PURCHASED_TICKET_ERRORS:
            return Object.values(action.errors.responseJSON);
        default:
            return oldState;
    }
}

export default purchasedTicketErrorsReducer;