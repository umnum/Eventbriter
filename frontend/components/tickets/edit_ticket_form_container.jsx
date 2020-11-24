import React from 'react';
import { connect } from 'react-redux';
import TicketForm from './ticket_form';
import { fetchTicket, updateTicket, clearTicketErrors } from '../../actions/ticket_actions';
import { Redirect } from 'react-router-dom';

class EditTicketForm extends React.Component {
    componentDidMount() {
        this.props.fetchTicket(this.props.match.params.ticketId);
    }

    render() {
        const { submitForm, formType, ticket, currentUser } = this.props;

        if (!ticket || !currentUser || ticket.userId !== currentUser.id) {
            return <Redirect to="/" />
        }
        return (
            <TicketForm 
            history={this.props.history}
            ticket={ticket}
            errors={this.props.errors}
            clearTicketErrors={this.props.clearTicketErrors}
            submitForm={submitForm}
            currentUser={currentUser}
            formType={formType} />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        ticket: state.entities.tickets[ownProps.match.params.ticketId],
        errors: state.errors.ticket,
        formType: 'Update Ticket'
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchTicket: ticketId => dispatch(fetchTicket(ticketId)),
        submitForm: ticket => dispatch(updateTicket(ticket)),
        clearTicketErrors: () => dispatch(clearTicketErrors)
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTicketForm);