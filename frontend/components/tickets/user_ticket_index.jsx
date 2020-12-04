import React from 'react';
import UserEventTicketIndexItem from './user_event_ticket_index_item';
import UserPurchasedTicketIndexItem from './user_purchased_ticket_index_item';
import DeleteEventTicketModal from './delete_event_ticket_modal';

class UserTicketIndex extends React.Component {
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            on: false
        }
    }

    componentDidMount() {
        this.props.fetchTickets(this.props.currentUser.id);
        this.props.fetchPurchasedTickets(this.props.currentUser.id);
        this.props.fetchEvents();
    }

    toggleModal(toggle) {
        this.setState({on: toggle})
    }

    render() {
        if (this.props.events === undefined) return null;
        if (Object.values(this.props.events).length === 0) return null;
        let userEventTicketIndexItems = this.props.userEventTickets.map(userEventTicket => {
            if (this.props.events === undefined) return null;
            if (this.props.events[userEventTicket.eventId] === undefined) return null;
            if (this.props.currentUser.id !== this.props.events[userEventTicket.eventId].organizerId) return null;
            return <UserEventTicketIndexItem 
                    key={userEventTicket.id}
                    event={this.props.events[userEventTicket.eventId]}
                    ticket={userEventTicket} 
                    userPurchasedTickets={this.props.userPurchasedTickets}
                    fetchTicket={this.props.fetchTicket}
                    removeTicket={this.props.removeTicket}
                    removePurchasedTicket={this.props.removePurchasedTicket} 
                    toggleModal={this.toggleModal} />
        });
        let userPurchasedTicketIndexItems = this.props.userPurchasedTickets.map(userPurchasedTicket => {
            if (this.props.currentUser.id !== userPurchasedTicket.userId) return null;
            if (this.props.entities.tickets[userPurchasedTicket.ticketId] === undefined) return null;
            return <UserPurchasedTicketIndexItem
            key={userPurchasedTicket.id}
            event={this.props.events[this.props.entities.tickets[userPurchasedTicket.ticketId].eventId]}
            tickets={this.props.entities.tickets}
            purchasedTicket={userPurchasedTicket}
            removePurchasedTicket={this.props.removePurchasedTicket} />
        });
        return (
            <div className="user-ticket-index">
                <h1>My Event Tickets</h1>
                <DeleteEventTicketModal on={this.state.on} toggleModal={this.toggleModal} />
                <div className="ticket-contents-name">
                    <i>Description</i>
                    <i>Total Quantity</i>
                    <i>Price</i>
                </div>
                <ul>{userEventTicketIndexItems}</ul>
                <h1>My Purcased Tickets</h1>
                <div className="ticket-contents-name">
                    <i>Description</i>
                    <i>Purchased Quantity</i>
                    <i>Price</i>
                </div>
                <ul>{userPurchasedTicketIndexItems}</ul>
            </div>
        );
    }
}

export default UserTicketIndex;