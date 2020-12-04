import React from 'react';

class UserPurchasedTicketIndexItem extends React.Component {
    handleDelete() {
        this.props.removePurchasedTicket(this.props.purchasedTicket.id);
    }

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
                <div className="user-event-ticket-dropdown">
                    <a><i className="fas fa-ellipsis-v"></i></a>
                    <div className="user-event-ticket-dropdown-content">
                        <p onClick={this.handleDelete.bind(this)}>Request Refund</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserPurchasedTicketIndexItem;