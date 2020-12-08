import { RECEIVE_PURCHASED_TICKET, RECEIVE_PURCHASED_TICKETS, REMOVE_PURCHASED_TICKET } from '../actions/purchased_ticket_actions';
const purchasedTicketsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_PURCHASED_TICKETS:
            if (Object.keys(action.payload).length === 0) {
                return oldState;
            }
            else {
                Object.values(action.payload.purchasedTickets).forEach(ticket => {
                    newState[ticket.id] = ticket;
                });
                return newState;
            }
        case RECEIVE_PURCHASED_TICKET:
            newState[action.payload.purchasedTicket.id] = action.payload.purchasedTicket;
            return newState;
        case REMOVE_PURCHASED_TICKET:
            delete newState[action.ticketId];
            return newState;
        default:
            return oldState;
    }
}

export default purchasedTicketsReducer;