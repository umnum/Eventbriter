const thunk = state => next => action => {
    if (typeof action === "function") {
        return action(next);
    }
    else {
        return next(action);
    }
};

export default thunk;