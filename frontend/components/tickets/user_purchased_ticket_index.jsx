import React from 'react';
import UserPurchasedTicketIndexItem from './user_purchased_ticket_index_item';
import DeletePurchasedTicketModal from './delete_purchased_ticket_modal';

class UserTicketIndex extends React.Component {
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLinkToEvents = this.handleLinkToEvents.bind(this);
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
        this.props.history.push("/");
    }

    render() {
        if (this.props.events === undefined) return null;
        if (Object.values(this.props.events).length === 0) return null;
        let userPurchasedTicketIndexItems = this.props.userPurchasedTickets.map(userPurchasedTicket => {
            if (this.props.currentUser.id !== userPurchasedTicket.userId) return null;
            if (this.props.entities.tickets[userPurchasedTicket.ticketId] === undefined) return null;
            return <UserPurchasedTicketIndexItem
            key={userPurchasedTicket.id}
            event={this.props.events[this.props.entities.tickets[userPurchasedTicket.ticketId].eventId]}
            tickets={this.props.entities.tickets}
            purchasedTicket={userPurchasedTicket}
            removePurchasedTicket={this.props.removePurchasedTicket}
            toggleModal={this.toggleModal} />
        });
        return (
            <div className="user-ticket-index">
                <DeletePurchasedTicketModal on={this.state.modalOn} toggleModal={this.toggleModal} />
                <div className="user-ticket-index-title">
                    <h1>Purchased Tickets</h1>
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