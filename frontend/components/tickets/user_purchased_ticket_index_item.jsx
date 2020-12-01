import React from 'react';

class UserPurchasedTicketIndexItem extends React.Component {
    render() {
        const { event, tickets, purchasedTicket } = this.props;
        if (event === undefined || tickets === undefined || purchasedTicket === undefined) return null;
        const ticket = tickets[purchasedTicket.ticketId];
        return (
            <div className="user-purchased-ticket-index-item">
                <li>Event: {event.name}</li>
                <li>Type: {ticket.name}</li>
                <li>Price: {ticket.price} {ticket.currency}</li>
                <li>Quantity: {purchasedTicket.quantity}</li>
            </div>
        )
    }
}

export default UserPurchasedTicketIndexItem;