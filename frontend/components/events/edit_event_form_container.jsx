import React from 'react';
import { connect } from 'react-redux';
import EventForm from './event_form';
import { fetchEvent, updateEvent } from '../../actions/event_actions';
import { fetchCategories } from '../../actions/category_actions';
import { Redirect } from 'react-router-dom';

class EditEventForm extends React.Component {
    componentDidMount() {
        this.props.fetchEvent(this.props.match.params.eventId);
    }

    render() {
        const { submitForm, formType, event, currentUser, categories } = this.props;

        if (!event || !currentUser || event.organizerId !== currentUser.id) {
            return <Redirect to="/" />
        }
        return (
            <EventForm 
                categories={categories}
                fetchCategories={this.props.fetchCategories}
                event={event}
                submitForm={submitForm} 
                currentUser={currentUser} 
                formType={formType} />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        event: state.entities.events[ownProps.match.params.eventId],
        categories: Object.values(state.entities.categories),
        formType: 'Update Event'
    });
};

const mapDispatchToProps = dispatch => {
    return({
        fetchEvent: eventId => dispatch(fetchEvent(eventId)),
        fetchCategories: () => dispatch(fetchCategories()),
        submitForm: event => dispatch(updateEvent(event))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEventForm);