export const RECEIVE_TICKET = 'RECEIVE_TICKET';
export const RECEIVE_TICKETS = 'RECEIVE_TICKETS';
export const REMOVE_TICKET = 'REMOVE_TICKET';
export const RECEIVE_TICKET_ERRORS = 'RECEIVE_TICKET_ERRORS';
export const CLEAR_TICKET_ERRORS = 'CLEAR_TICKET_ERRORS';

export const receiveTicket = (ticket) => {
    return ({
        type: RECEIVE_TICKET,
        ticket
    });
};

export const receiveTickets = (tickets) => {
    return ({
        type: RECEIVE_TICKETS,
        tickets
    });
};

export const deleteTicket = (ticketId) => {
    return ({
        type: REMOVE_TICKET,
        ticketId
    });
};

export const receiveTicketErrors = (errors) => {
    return ({
        type: RECEIVE_TICKET_ERRORS,
        errors
    });
};

export const clearTicketErrors = () => {
    return ({
        type: CLEAR_TICKET_ERRORS
    });
};