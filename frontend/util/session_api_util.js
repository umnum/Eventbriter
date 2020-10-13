export const signup = (user) => {
    return $.ajax({
        url: '/api/users',
        method: 'POST',
        data: { user }
    });
};