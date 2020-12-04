import { connect } from 'react-redux';
import TicketForm from './ticket_form';
import { createTicket, clearTicketErrors } from '../../actions/ticket_actions';
import { fetchEvent } from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.ticket,
        ticket: {
            name: "",
            price: "",
            currency: "",
            quantity: "",
            userId: null,
            eventId: null
        },
        event: state.entities.events[ownProps.match.params.eventId],
        formType: 'Create Ticket'
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchEvent: eventId => dispatch(fetchEvent(eventId)),
        submitForm: ticket => dispatch(createTicket(ticket)),
        clearTicketErrors: () => dispatch(clearTicketErrors())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketForm);