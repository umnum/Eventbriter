import React from 'react';
import UserEventTicketIndexItem from './user_event_ticket_index_item';

class UserTicketIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTickets(this.props.currentUser.id);
        this.props.fetchPurchasedTickets(this.props.currentUser.id);
        this.props.fetchEvents();
    }

    render() {
        let userEventTicketIndexItems = this.props.userEventTickets.map(userEventTicket => {
            return <UserEventTicketIndexItem 
                    key={userEventTicket.id}
                    event={this.props.events[userEventTicket.eventId]}
                    ticket={userEventTicket} />
        });
        return (
            <div>
                <h1>My Event Tickets</h1>
                <ul>{userEventTicketIndexItems}</ul>
                <h1>My Purcased Tickets</h1>
            </div>
        );
    }
}

export default UserTicketIndex;