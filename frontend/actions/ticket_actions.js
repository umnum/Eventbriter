import * as TicketAPIUtils from '../util/ticket_api_util';

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

export const fetchTicket = ticketId => {
    return (dispatch => {
        return TicketAPIUtils.fetchTicket(ticketId)
            .then(ticket => dispatch(receiveTicket(ticket)),
                errors => dispatch(receiveTicketErrors(errors)))
    });
};

export const fetchTickets = userId => {
    return (dispatch => {
        return TicketAPIUtils.fetchTickets(userId)
            then(tickets => dispatch(receiveTickets(tickets)),
                errors => dispatch(receiveTicketErrors(errors)))
    });
};

export const createTicket = ticket => {
    return (dispatch => {
        return TicketAPIUtils.createTicket(ticket)
            .then(ticket => dispatch(receiveTicket(ticket)),
                errors => dispatch(receiveTicketErrors(errors)));
    });
};

export const updateTicket = ticket => {
    return (dispatch => {
        return TicketAPIUtils.updateTicket(ticket)
            .then(ticket => dispatch(receiveTicket(ticket)),
                errors => dispatch(receiveTicketErrors(errors)));
    });
};

export const removeTicket = ticketId => {
    return (dispatch => {
        return TicketAPIUtils.removeTicket(ticketId)
            .then(ticket => dispatch(deleteTicket(ticketId)),
                errors => dispatch(receiveTicketErrors(errors)));
    });
};