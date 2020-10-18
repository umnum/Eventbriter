import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import eventsReducer from './events_reducer';
import categoriesReducer from './categories_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    events: eventsReducer,
    categories: categoriesReducer
});

export default entitiesReducer;