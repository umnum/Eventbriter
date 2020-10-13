import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from '../actions/session_actions'

let _nullState = {id: null};
const sessionReducer = (oldState = _nullState, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return action.user;
        case LOGOUT_CURRENT_USER:
            return _nullState;
        default:
            return oldState;
    }
}

export default sessionReducer;