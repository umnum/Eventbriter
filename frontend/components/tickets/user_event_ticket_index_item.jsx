import React from 'react';

class UserEventTicketIndexItem extends React.Component {
    render() {
        const { event, ticket } = this.props;
        if (event === undefined) return null;
        return (
            <div className="user-event-ticket-index-item">
                <li>Event: {event.name}</li>
                <li>Type: {ticket.name}</li>
                <li>Price: {ticket.price} {ticket.currency}</li>
                <li>Quantity: {ticket.quantity}</li>
            </div>
        )
    }
}

export default UserEventTicketIndexItem;