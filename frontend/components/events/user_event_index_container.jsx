import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/event_actions';
import UserEventIndex from './user_event_index';

const mapStateToProps = state => {
    return ({
        events: Object.values(state.entities.events),
        currentUserId: state.session.id
    });
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchEvents: () => dispatch(fetchEvents())
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEventIndex);