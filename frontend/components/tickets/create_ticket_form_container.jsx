import { connect } from 'react-redux';
import TicketForm from './ticket_form';
import { createTicket, clearTicketErrors } from '../../actions/ticket_actions';

const mapStateToProps = state => {
    return ({
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.ticket,
        ticket: {
            name: "",
            price: 0.00,
            currency: "",
            quantity: 0,
            userId: null,
            eventId: null
        },
        formType: 'Create Ticket'
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        submitForm: ticket => dispatch(createTicket(ticket)),
        clearTicketErrors: () => dispatch(clearTicketErrors())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketForm);