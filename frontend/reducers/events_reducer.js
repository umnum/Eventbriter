import { RECEIVE_EVENT, RECEIVE_EVENTS, REMOVE_EVENT } from '../actions/event_actions';

const eventsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_EVENTS:
            return action.events;
        case RECEIVE_EVENT:
            newState[action.payload.event.id] = action.payload.event;
            return newState;
        case REMOVE_EVENT:
            delete newState[action.eventId];
            return newState;
        default:
            return oldState;
    }
}

export default eventsReducer;