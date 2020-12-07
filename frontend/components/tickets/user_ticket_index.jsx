import React from 'react';
import UserEventTicketIndexItem from './user_event_ticket_index_item';
import UserPurchasedTicketIndexItem from './user_purchased_ticket_index_item';
import DeleteEventTicketModal from './delete_event_ticket_modal';
import DeletePurchasedTicketModal from './delete_purchased_ticket_modal';
import { Link } from 'react-router-dom';

class UserTicketIndex extends React.Component {
    constructor(props) {
        super(props);
        this.toggleDeleteEventTicketModal = this.toggleDeleteEventTicketModal.bind(this);
        this.toggleDeletePurchasedTicketModal = this.toggleDeletePurchasedTicketModal.bind(this);
        this.handleLinkToEvents = this.handleLinkToEvents.bind(this);
        this.state = {
            eventTicketModalon: false,
            purchasedTicketModalon: false
        }
    }

    componentDidMount() {
        this.props.fetchTickets(this.props.currentUser.id);
        this.props.fetchPurchasedTickets(this.props.currentUser.id);
        this.props.fetchEvents();
    }

    toggleDeleteEventTicketModal(toggle) {
        this.setState({eventTicketModalon: toggle})
    }

    toggleDeletePurchasedTicketModal(toggle) {
        this.setState({purchasedTicketModalon: toggle})
    }

    handleLinkToEvents() {
        scrollTo(0,0);
        this.props.history.push("/");
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
                    toggleModal={this.toggleDeleteEventTicketModal} />
        });
        let userPurchasedTicketIndexItems = this.props.userPurchasedTickets.map(userPurchasedTicket => {
            if (this.props.currentUser.id !== userPurchasedTicket.userId) return null;
            if (this.props.entities.tickets[userPurchasedTicket.ticketId] === undefined) return null;
            return <UserPurchasedTicketIndexItem
            key={userPurchasedTicket.id}
            event={this.props.events[this.props.entities.tickets[userPurchasedTicket.ticketId].eventId]}
            tickets={this.props.entities.tickets}
            purchasedTicket={userPurchasedTicket}
            removePurchasedTicket={this.props.removePurchasedTicket}
            toggleModal={this.toggleDeletePurchasedTicketModal} />
        });
        return (
            <div className="user-ticket-index">
                <div className="user-ticket-index-title">
                    <h1>My Tickets For Sale</h1>
                </div>
                <DeleteEventTicketModal on={this.state.eventTicketModalon} toggleModal={this.toggleDeleteEventTicketModal} />
                <DeletePurchasedTicketModal on={this.state.purchasedTicketModalon} toggleModal={this.toggleDeletePurchasedTicketModal} />
                { this.props.userEventTickets.length === 0 ? <></> : 
                <div className="ticket-contents-name">
                    <i>Description</i>
                    <i>Total Quantity</i>
                    <i>Price</i>
                </div>}
                <ul>{userEventTicketIndexItems}</ul>
                <div className="user-ticket-index-title">
                    <h1>My Purchased Tickets</h1>
                </div>
                { this.props.userPurchasedTickets.length === 0 ? 
                <div className="ticket-contents-empty">
                    <p>Nothing here!</p>
                    <p>Click <a onClick={this.handleLinkToEvents}>here</a> to find an event and purchase tickets.</p>
                </div> :
                <div className="ticket-contents-name">
                    <i>Description</i>
                    <i>Purchased Quantity</i>
                    <i>Price</i>
                </div>}
                <ul>{userPurchasedTicketIndexItems}</ul>
            </div>
        );
    }
}

export default UserTicketIndex;