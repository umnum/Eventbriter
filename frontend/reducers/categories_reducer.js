import { RECEIVE_CATEGORIES, RECEIVE_CATEGORY } from '../actions/category_actions'

const categoriesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_CATEGORIES:
            return action.categories;
        case RECEIVE_CATEGORY:
            newState[action.category.id] = action.category;
            return newState;
        default:
            return oldState;
    }
};

export default categoriesReducer;