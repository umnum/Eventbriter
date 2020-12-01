import React from 'react';
import UserEventTicketIndexItem from './user_event_ticket_index_item';
import UserPurchasedTicketIndexItem from './user_purchased_ticket_index_item';

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
        if (Object.values(this.props.events).length === 0) return null;
        let userEventTicketIndexItems = this.props.userEventTickets.map(userEventTicket => {
            return <UserEventTicketIndexItem 
                    key={userEventTicket.id}
                    event={this.props.events[userEventTicket.eventId]}
                    ticket={userEventTicket} />
        });
        let userPurchasedTicketIndexItems = this.props.userPurchasedTickets.map(userPurchasedTicket => {
            return <UserPurchasedTicketIndexItem
            key={userPurchasedTicket.id}
            event={this.props.events[this.props.entities.tickets[userPurchasedTicket.ticketId].eventId]}
            tickets={this.props.entities.tickets}
            purchasedTicket={userPurchasedTicket}
            />
        });
        return (
            <div>
                <h1>My Event Tickets</h1>
                <ul>{userEventTicketIndexItems}</ul>
                <h1>My Purcased Tickets</h1>
                <ul>{userPurchasedTicketIndexItems}</ul>
            </div>
        );
    }
}

export default UserTicketIndex;