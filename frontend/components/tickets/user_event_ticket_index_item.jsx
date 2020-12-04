import React from 'react';
import { Link } from 'react-router-dom';

class UserEventTicketIndexItem extends React.Component {
    render() {
        const { event, ticket } = this.props;
        if (event === undefined) return null;
        return (
            <div className="user-event-ticket-index-item">
                <div className="user-event-ticket-description">
                    <p>{event.name}</p>
                    <p>{ticket.name}</p>
                </div>
                <div className="user-event-ticket-quantity">
                    <p>{ticket.quantity}</p>
                </div>
                <div className="user-event-ticket-price">
                    <p>{ticket.price} {ticket.currency}</p>
                </div>
                <div className="user-event-ticket-dropdown">
                    <a><i className="fas fa-ellipsis-v"></i></a>
                    <div className="user-event-ticket-dropdown-content">
                        <Link to={`/tickets/${ticket.id}/edit`}><p>Edit Ticket</p></Link>
                        <p onClick={this.handleDelete}>Request Refund</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserEventTicketIndexItem;