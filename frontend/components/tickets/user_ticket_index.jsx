import React from 'react';
import UserEventTicketIndexItem from './user_event_ticket_index_item';
import DeleteEventTicketModal from './delete_event_ticket_modal';
import DeletePurchasedTicketModal from './delete_purchased_ticket_modal';

class UserTicketIndex extends React.Component {
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLinkToEvents = this.handleLinkToEvents.bind(this);
        this.handleCreateTicket = this.handleCreateTicket.bind(this);
        this.state = {
            modalOn: false
        }
    }

    componentDidMount() {
        this.props.fetchTickets(this.props.currentUser.id);
        this.props.fetchPurchasedTickets(this.props.currentUser.id);
        this.props.fetchEvents();
    }

    toggleModal(toggle) {
        this.setState({modalOn: toggle})
    }

    handleLinkToEvents() {
        scrollTo(0,0);
        this.props.history.push("/");
    }

    handleCreateTicket() {
        this.props.history.push(`/events/${this.props.event.id}/tickets/new`);
    }

    render() {
        if (this.props.event === undefined) return null;
        let eventTicketCount = 0;
        let userEventTicketIndexItems = this.props.userEventTickets.map(userEventTicket => {
            if (this.props.event.id !== userEventTicket.eventId) return null;
            if (this.props.currentUser.id !== this.props.event.organizerId) return null;
            eventTicketCount++;
            return <UserEventTicketIndexItem 
                    key={userEventTicket.id}
                    event={this.props.event}
                    ticket={userEventTicket} 
                    userPurchasedTickets={this.props.userPurchasedTickets}
                    fetchTicket={this.props.fetchTicket}
                    removeTicket={this.props.removeTicket}
                    removePurchasedTicket={this.props.removePurchasedTicket} 
                    toggleModal={this.toggleModal} />
        });
        return (
            <div className="user-ticket-index">
                <div className="user-ticket-index-title">
                    <h1>My Tickets For Sale</h1>
                </div>
                <DeleteEventTicketModal on={this.state.modalOn} toggleModal={this.toggleModal} />
                { eventTicketCount === 0 ? 
                <div className="ticket-contents-empty">
                    <p>There are no tickets for this event!</p>
                </div> : 
                <>
                <div className="ticket-contents-name">
                    <i>Description</i>
                    <i>Tickets Sold / Total Quantity</i>
                    <i>Price</i>
                    <i>Manage Ticket</i>
                </div>
                <ul>{userEventTicketIndexItems}</ul>
                </>}
                <div className="create-event-ticket">
                    <button onClick={this.handleCreateTicket}>Create Ticket</button>
                </div>
            </div>
        );
    }
}

export default UserTicketIndex;