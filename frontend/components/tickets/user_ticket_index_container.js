import { connect } from 'react-redux';
import UserTicketIndex from './user_ticket_index';
import { fetchTicket, fetchTickets, removeTicket } from '../../actions/ticket_actions';
import { fetchPurchasedTickets, removePurchasedTicket } from '../../actions/purchased_ticket_actions';
import { fetchEvents } from '../../actions/event_actions';

const mapStateToProps = state => {
    return {
        currentUser: state.entities.users[state.session.id],
        userEventTickets: Object.values(state.entities.tickets),
        userPurchasedTickets: Object.values(state.entities.purchasedTickets),
        events: state.entities.events,
        entities: state.entities
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTickets: userId => dispatch(fetchTickets(userId)),
        fetchTicket: ticketId => dispatch(fetchTicket(ticketId)),
        fetchPurchasedTickets: userId => dispatch(fetchPurchasedTickets(userId)),
        fetchEvents: () => dispatch(fetchEvents()),
        removeTicket: ticketId => dispatch(removeTicket(ticketId)),
        removePurchasedTicket: ticketId => dispatch(removePurchasedTicket(ticketId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTicketIndex);