import { connect } from 'react-redux';
import { fetchEvent } from '../../actions/event_actions';
import EventShow from './event_show';

const mapStateToProps = (state, ownProps) => {
    return({
        event: state.entities.events[ownProps.match.params.eventId],
        users: state.entities.users,
        tickets: Object.values(state.entities.tickets)
    });
};    
    

const mapDispatchToProps = dispatch => {
    return({
        fetchEvent: (eventId) => dispatch(fetchEvent(eventId))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);