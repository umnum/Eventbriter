import { connect } from 'react-redux';
import { fetchEvents, removeEvent, clearEventErrors } from '../../actions/event_actions';
import UserEventIndex from './user_event_index';

const mapStateToProps = state => {
    return ({
        events: Object.values(state.entities.events),
        currentUserId: state.session.id
    });
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchEvents: () => dispatch(fetchEvents()),
        removeEvent: (eventId) => dispatch(removeEvent(eventId)),
        clearEventErrors: () => dispatch(clearEventErrors())
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEventIndex);