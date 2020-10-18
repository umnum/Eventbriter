
export const createEvent = (formData) => {
    return $.ajax({
        url: '/api/events',
        method: 'POST',
        data: formData,
        contentType: false,
        processData: false
    });
};

export const updateEvent = (formData) => {
    return $.ajax({
        url: `/api/events/${formData.get("event[id]")}`,
        method: 'PATCH',
        data: formData,
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