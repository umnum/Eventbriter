import React from 'react';

class UserTicketIndex extends React.Component {
    componentDidMount() {
        this.props.fetchTickets(this.props.currentUser.id);
        this.props.fetchPurchasedTickets(this.props.currentUser.id);
    }

    render() {
        const UserEventTicketIndexItems = this.props.userEventTickets.map(userEventTicket => {
            return <li>UserEventTicket</li>
        });
        return (
            <div>
                <h1>My Event Tickets</h1>
                {UserEventTicketIndexItems}
                <h1>My Purcased Tickets</h1>
            </div>
        );
    }
}

export default UserTicketIndex;