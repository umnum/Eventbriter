import * as EventAPIUtils from '../util/event_api_util';

export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS';
export const CLEAR_EVENT_ERRORS = 'CLEAR_EVENT_ERRORS';

export const receiveEvent = (payload) => {
    return ({ 
        type: RECEIVE_EVENT,
        payload
    });
};

export const receiveEvents = (events) => {
    return ({ 
        type: RECEIVE_EVENTS,
        events
    });
};

export const deleteEvent = (eventId) => {
    return ({
        type: REMOVE_EVENT,
        eventId
    })
};

export const receiveEventErrors = (errors) => {
    return ({
        type: RECEIVE_EVENT_ERRORS,
        errors
    })
};

export const clearEventErrors = () => {
    return ({
        type: CLEAR_EVENT_ERRORS
    })
};

export const fetchEvent = eventId => {
    return (dispatch => {
        return EventAPIUtils.fetchEvent(eventId)
            .then(response => dispatch(receiveEvent(response)),
                  errors => dispatch(receiveEventErrors(errors)))
    });
};

export const fetchEvents = () => {
    return (dispatch => {
        return EventAPIUtils.fetchEvents()
            .then(events => dispatch(receiveEvents(events)),
                  errors => dispatch(receiveEventErrors(errors)));
    });
};

export const createEvent = (payload) => {
    return (dispatch => {
        return EventAPIUtils.createEvent(payload.event)
            .then(payload => dispatch(receiveEvent(payload)),
                  errors => dispatch(receiveEventErrors(errors)));
    });
};

export const updateEvent = (formData) => {
    return (dispatch => {
        return EventAPIUtils.updateEvent(formData)
            .then(event => dispatch(receiveEvent(event)),
                  errors => dispatch(receiveEventErrors(errors)));
    });
};

export const removeEvent = (eventId) => {
    return (dispatch => {
        return EventAPIUtils.removeEvent(eventId)
            .then(success => dispatch(deleteEvent(eventId)),
                  errors => dispatch(receiveEventErrors(errors)));
    });
};