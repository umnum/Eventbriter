import { connect } from 'react-redux';
import Header from './header';
import { clearErrors, logout } from '../../actions/session_actions';
import { clearEventErrors } from '../../actions/event_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
    return({
        isLoggedIn: () => state.session.id === null,
        currentUser: state.entities.users[state.session.id]
    });
}
const mapDispatchToProps = dispatch => {
    return ({
        clearErrors: () => dispatch(clearErrors()),
        clearEventErrors: () => dispatch(clearEventErrors()),
        logout: () => dispatch(logout())
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));