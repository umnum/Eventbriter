import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import eventsReducer from './events_reducer';
import categoriesReducer from './categories_reducer'
import ticketsReducer from './tickets_reducer';
import purchasedTicketsReducer from './purchased_tickets_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    events: eventsReducer,
    categories: categoriesReducer,
    tickets: ticketsReducer,
    purchasedTickets: purchasedTicketsReducer
});

export default entitiesReducer;