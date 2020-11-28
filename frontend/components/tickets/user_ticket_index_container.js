import { connect } from 'react-redux';
import UserTicketIndex from './user_ticket_index';
import { fetchTickets } from '../../actions/ticket_actions';
import { fetchPurchasedTickets } from '../../actions/purchased_ticket_actions';
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
        fetchPurchasedTickets: userId => dispatch(fetchPurchasedTickets(userId)),
        fetchEvents: () => dispatch(fetchEvents())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTicketIndex);