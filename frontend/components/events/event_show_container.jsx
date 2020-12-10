import { connect } from 'react-redux';
import { fetchEvent, updateEvent } from '../../actions/event_actions';
import { purchaseTicket } from '../../actions/purchased_ticket_actions';
import { updateTicket } from '../../actions/ticket_actions';
import EventShow from './event_show';

const mapStateToProps = (state, ownProps) => {
    return({
        event: state.entities.events[ownProps.match.params.eventId],
        users: state.entities.users,
        tickets: Object.values(state.entities.tickets),
        currentUserId: state.session.id
    });
};    
    

const mapDispatchToProps = dispatch => {
    return({
        fetchEvent: eventId => dispatch(fetchEvent(eventId)),
        updateEvent: formData => dispatch(updateEvent(formData)),
        updateTicket: ticket => dispatch(updateTicket(ticket)),
        purchaseTicket: ticket => dispatch(purchaseTicket(ticket))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);