import * as PurchasedTicketAPIUtils from '../util/purchased_ticket_api_util';

export const RECEIVE_PURCHASED_TICKET = 'RECEIVE_PURCHASED_TICKET';
export const RECEIVE_PURCHASED_TICKETS = 'RECEIVE_PURCHASED_TICKETS';
export const REMOVE_PURCHASED_TICKET = 'REMOVE_PURCHASED_TICKET';
export const RECEIVE_PURCHASED_TICKET_ERRORS = 'RECEIVE_PURCHASED_TICKET_ERRORS';
export const CLEAR_PURCHASED_TICKET_ERRORS = 'CLEAR_PURCHASED_TICKET_ERRORS';

export const receivePurchasedTicket = (payload) => {
    return ({
        type: RECEIVE_PURCHASED_TICKET,
        payload
    });
};

export const receivePurchasedTickets = (payload) => {
    return ({
        type: RECEIVE_PURCHASED_TICKETS,
        payload
    });
};

export const deletePurchasedTicket = (ticketId) => {
    return ({
        type: REMOVE_PURCHASED_TICKET,
        ticketId
    });
};

export const receivePurchasedTicketErrors = (errors) => {
    return ({
        type: RECEIVE_PURCHASED_TICKET_ERRORS,
        errors
    });
};

export const clearPurchasedTicketErrors = () => {
    return ({
        type: CLEAR_PURCHASED_TICKET_ERRORS
    });
};

export const fetchPurchasedTicket = ticketId => {
    return (dispatch => {
        return PurchasedTicketAPIUtils.fetchPurchasedTicket(ticketId)
            .then(payload => dispatch(receivePurchasedTicket(payload)),
                errors => dispatch(receivePurchasedTicketErrors(errors)))
    });
};

export const fetchPurchasedTickets = userId => {
    return (dispatch => {
        return PurchasedTicketAPIUtils.fetchPurchasedTickets(userId)
            .then(payload => dispatch(receivePurchasedTickets(payload)),
                errors => dispatch(receivePurchasedTicketErrors(errors)))
    });
};

export const purchaseTicket = ticket => {
    return (dispatch => {
        return PurchasedTicketAPIUtils.purchaseTicket(ticket)
            .then(payload => dispatch(receivePurchasedTicket(payload)),
                errors => dispatch(receivePurchasedTicketErrors(errors)));
    });
};

export const removePurchasedTicket = ticketId => {
    return (dispatch => {
        return PurchasedTicketAPIUtils.removePurchasedTicket(ticketId)
            .then(payload => dispatch(deletePurchasedTicket(ticketId)),
                errors => dispatch(receivePurchasedTicketErrors(errors)));
    });
};