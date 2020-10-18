import React from 'react';
import HeaderContainer from './header/header_container';
import HomeContainer from './home/home_container'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import EditEventFormContainer from './events/edit_event_form_container';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import NotFound from './not_found';

const App = () => {
    return (
        <div>
            <HeaderContainer />
            <Switch>
                <Route exact path="/" component={HomeContainer} />
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <Route exact path="/events/:eventId/edit" component={EditEventFormContainer} />
                <Route path="/" component={NotFound} />
            </Switch>
        </div>
    );
};

export default App;