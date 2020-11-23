export const createTicket = (ticket) => {
    return $.ajax({
        url: '/api/tickets',
        method: 'POST',
        data: ticket
    });
};

export const updateTicket = (ticket) => {
    return $.ajax({
        url: `/api/tickets/${ticket.id}`,
        method: 'PATCH',
        data: ticket
    });
};

export const fetchTickets = (userId) => {
    return $.ajax({
        url: `/api/users/${userId}/tickets`,
        method: 'GET'
    });
};

export const fetchTicket = (ticketId) => {
    return $.ajax({
        url: `/api/tickets/${ticketId}`,
        method: 'GET'
    });
};

export const removeTicket = (ticketId) => {
    return $.ajax({
        url: `/api/tickets/${ticketId}`,
        method: 'DELETE'
    });
};