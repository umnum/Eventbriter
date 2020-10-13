import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = state => {
    return({
        errors: state.errors.session
    });
}

const mapDispatchToProps = dispatch => {
    return({
        processForm: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors())
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);