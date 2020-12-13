import React from 'react';

class UserPurchasedTicketIndexItem extends React.Component {
    handleDelete() {
        const purchasedQuantity = this.props.purchasedTicket.quantity;
        const ticketId = this.props.purchasedTicket.ticketId;
        const ticketsSold = this.props.tickets[ticketId].ticketsSold;
        const eventTicketsSold = this.props.event.tickets_sold;
        this.props.removePurchasedTicket(this.props.purchasedTicket.id)
            .then(successResponse => {
                this.props.toggleModal(true);
                window.scrollTo(0,0);
                document.body.classList.add("stop-scrolling");
            })
            .then(successResponse => {
                this.props.updateTicket({ticket: {id: ticketId, tickets_sold: ticketsSold - purchasedQuantity}})
            })
            .then(successResponse => {
                const formData = new FormData();
                formData.append('event[id]', this.props.event.id);
                formData.append('event[tickets_sold]', eventTicketsSold - purchasedQuantity);
                if (purchasedQuantity > 0) {
                    formData.append('event[status]', "On Sale");
                }
                const payload = {user: this.props.currentUser, event: formData};
                this.props.updateEvent(payload)
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