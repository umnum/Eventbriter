import { connect } from 'react-redux';
import Home from './home';
import { fetchEvents } from '../../actions/event_actions';

const mapStateToProps = state => {
    return ({
        errors: state.errors.session,
        events: Object.values(state.entities.events)
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchEvents: () => dispatch(fetchEvents())
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);