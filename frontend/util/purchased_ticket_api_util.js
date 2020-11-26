export const purchaseTicket = (ticket) => {
    return $.ajax({
        url: '/api/purchased_tickets',
        method: 'POST',
        data: ticket
    });
};

export const fetchPurchasedTickets = (userId) => {
    return $.ajax({
        url: `/api/users/${userId}/purchased_tickets`,
        method: 'GET'
    });
};

export const fetchPurchasedTicket = (ticketId) => {
    return $.ajax({
        url: `/api/purchased_tickets/${ticketId}`,
        method: 'GET'
    });
};

export const removePurchasedTicket = (ticketId) => {
    return $.ajax({
        url: `/api/purchased_tickets/${ticketId}`,
        method: 'DELETE'
    });
};