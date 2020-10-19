import { connect } from 'react-redux';
import EventForm from './event_form';
import { createEvent } from '../../actions/event_actions';
import { fetchCategories } from '../../actions/category_actions';

const mapStateToProps = state => {
    return ({
        currentUser: state.entities.users[state.session.id],
        categories: Object.values(state.entities.categories),
        event: {
            name: "",
            location: "",
            description: "",
            categoryId: null,
            eventType: "",
            startDate: null,
            endDate: null,
            timezone: "",
            status: "On sale",
            eventImage: null
        },
        formType: 'Create Event'
    });
};

const mapDispatchToProps = dispatch => {
    return({
        submitForm: event => dispatch(createEvent(event)),
        fetchCategories: () => dispatch(fetchCategories())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);