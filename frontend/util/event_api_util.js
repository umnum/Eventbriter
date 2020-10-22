
export const createEvent = (formData) => {
    return $.ajax({
        url: '/api/events',
        method: 'POST',
        data: formData,
        contentType: false,
        processData: false
    });
};

export const updateEvent = (payload) => {
    return $.ajax({
        url: `/api/events/${payload.event.get("event[id]")}`,
        method: 'PATCH',
        data: payload.event,
        contentType: false,
        processData: false
    })
}

export const fetchEvents = () => {
    return $.ajax({
        url: '/api/events',
        method: 'GET'
    });
};

export const fetchEvent = (eventId) => {
    return $.ajax({
        url: `/api/events/${eventId}`,
        method: 'GET'
    });
};

export const removeEvent = (eventId) => {
    return $.ajax({
        url: `/api/events/${eventId}`,
        method: 'DELETE'
    });
};