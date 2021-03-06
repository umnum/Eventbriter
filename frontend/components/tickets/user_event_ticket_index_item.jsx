import React from 'react';
import { Link } from 'react-router-dom';

class UserEventTicketIndexItem extends React.Component {
    handleDelete() {
        this.props.removeTicket(this.props.ticket.id)
            .then(successResponse => {
                this.props.toggleModal(true);
                window.scrollTo(0,0);
                document.body.classList.add("stop-scrolling");
        })
            .then(successResponse => {
                const formData = new FormData();
                const eventCapacity = this.props.event.capacity;
                formData.append('event[id]', this.props.event.id);
                formData.append('event[capacity]', eventCapacity - this.props.ticket.quantity);
                formData.append('event[tickets_sold]', this.props.event.ticketsSold - this.props.ticket.ticketsSold);
                const payload = {user: this.props.currentUser, event: formData};
                this.props.updateEvent(payload)
            });
    }

    render() {
        const { event, ticket } = this.props;
        const currencySymbol = {
            'USD': '$', 'EUR': '€', 'GBP': '£', 'INR': '₹', 'JPY': '¥', 'CNY': '¥'
        };
        if (event === undefined) return null;
        return (
            <div className="user-event-ticket-index-item">
                <div className="user-event-ticket-description">
                    <p>{event.name}</p>
                    <p>{ticket.name}</p>
                </div>
                <div className="user-event-ticket-quantity">
                    <p>{ticket.ticketsSold} / {ticket.quantity}</p>
                </div>
                <div className="user-event-ticket-price">
                    <p>{currencySymbol[ticket.currency]} {ticket.price}</p>
                </div>
                <div className="user-event-ticket-dropdown">
                    <a><i className="fas fa-ellipsis-v"></i></a>
                    <div className="user-event-ticket-dropdown-content">
                        <Link to={`/tickets/${ticket.id}/edit`}><p>Edit Ticket</p></Link>
                        <p onClick={this.handleDelete.bind(this)}>Remove Ticket</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserEventTicketIndexItem;