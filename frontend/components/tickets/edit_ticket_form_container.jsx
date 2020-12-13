import React from 'react';
import { connect } from 'react-redux';
import TicketForm from './ticket_form';
import { fetchTicket, updateTicket, clearTicketErrors } from '../../actions/ticket_actions';
import { fetchEvent, updateEvent } from '../../actions/event_actions';
import { Redirect } from 'react-router-dom';

class EditTicketForm extends React.Component {
    componentDidMount() {
        this.props.fetchTicket(this.props.match.params.ticketId)
            .then(successResponse => this.props.fetchEvent(this.props.ticket.eventId));
    }

    render() {
        const { submitForm, formType, ticket, currentUser, events } = this.props;

        if (!ticket || Object.values(events).length === 0) {
            return null;
        }
        if (!currentUser || events[this.props.ticket.eventId].organizerId !== currentUser.id) {
            return <Redirect to="/" />
        }
        return (
            <TicketForm 
            history={this.props.history}
            ticket={ticket}
            event={events[this.props.ticket.eventId]}
            errors={this.props.errors}
            clearTicketErrors={this.props.clearTicketErrors}
            submitForm={submitForm}
            updateEvent={this.props.updateEvent}
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
        events: state.entities.events,
        formType: 'Update Ticket'
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchTicket: ticketId => dispatch(fetchTicket(ticketId)),
        fetchEvent: eventId => dispatch(fetchEvent(eventId)),
        updateEvent: formData => dispatch(updateEvent(formData)),
        submitForm: ticket => dispatch(updateTicket(ticket)),
        clearTicketErrors: () => dispatch(clearTicketErrors)
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTicketForm);