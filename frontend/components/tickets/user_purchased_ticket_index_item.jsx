import React from 'react';

class UserPurchasedTicketIndexItem extends React.Component {
    handleDelete() {
        this.props.removePurchasedTicket(this.props.purchasedTicket.id)
            .then(successResponse => {
                this.props.toggleModal(true);
                window.scrollTo(0,0);
                document.body.classList.add("stop-scrolling");
            });
    }

    render() {
        const { event, tickets, purchasedTicket } = this.props;
        if (event === undefined || tickets === undefined || purchasedTicket === undefined) return null;
        const ticket = tickets[purchasedTicket.ticketId];
        const currencySymbol = {
            'USD': '$', 'EUR': '€', 'GBP': '£', 'INR': '₹', 'JPY': '¥', 'CNY': '¥'
        };
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
                    <p>{currencySymbol[ticket.currency]} {ticket.price}</p>
                </div>
                <div className="user-purchased-ticket-request-refund">
                    <button onClick={this.handleDelete.bind(this)}>Request Refund</button>
                </div>
            </div>
        )
    }
}

export default UserPurchasedTicketIndexItem;