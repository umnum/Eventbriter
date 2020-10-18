import { connect } from 'react-redux';
import EventIndex from './event_index';
import { fetchEvents } from '../../actions/event_actions';

const mapStateToProps = state => {
    return ({
        events: Object.values(state.entities.events)
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchEvents: () => dispatch(fetchEvents())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);