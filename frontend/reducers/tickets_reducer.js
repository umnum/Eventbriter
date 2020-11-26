import { RECEIVE_TICKET, RECEIVE_TICKETS, REMOVE_TICKET } from '../actions/ticket_actions';
import { RECEIVE_PURCHASED_TICKET, RECEIVE_PURCHASED_TICKETS } from '../actions/purchased_ticket_actions';

const ticketsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_TICKETS:
            return action.payload.tickets;
        case RECEIVE_TICKET:
            newState[action.payload.ticket.id] = action.payload.ticket;
            return newState;
        case RECEIVE_PURCHASED_TICKETS:
            return action.payload.tickets;
        case RECEIVE_PURCHASED_TICKET:
            newState[action.payload.ticket.id] = action.payload.ticket;
        case REMOVE_TICKET:
            delete newState[action.ticketId];
            return newState;
        default:
            return oldState;
    }
}

export default ticketsReducer;