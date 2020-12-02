import React from 'react';

class UserPurchasedTicketIndexItem extends React.Component {
    render() {
        const { event, tickets, purchasedTicket } = this.props;
        if (event === undefined || tickets === undefined || purchasedTicket === undefined) return null;
        const ticket = tickets[purchasedTicket.ticketId];
        return (
            <div className="user-purchased-ticket-index-item">
                <div className="user-purchased-ticket-description">
                    <p>{event.name}</p>
                    <p>{ticket.name}</p>
                </div>
                <div className="user-purchased-ticket-quantity">
                    <p>{purchasedTicket.quantity}</p>
                </div>
                <div className="user-purchased-ticket-price">
                    <p>{ticket.price} {ticket.currency}</p>
                </div>
            </div>
        )
    }
}

export default UserPurchasedTicketIndexItem;