import { RECEIVE_TICKET, RECEIVE_TICKETS, REMOVE_TICKET } from '../actions/ticket_actions';

const ticketsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_TICKETS:
            return action.tickets;
        case RECEIVE_TICKET:
            newState[action.payload.ticket.id] = action.payload.ticket;
            return newState;
        case REMOVE_TICKET:
            delete newState[action.ticketId];
            return newState;
        default:
            return oldState;
    }
}

export default ticketsReducer;