import React from 'react';
import HeaderContainer from './header/header_container';
import Home from './home/home'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import NotFound from './not_found';

const App = () => {
    return (
        <div>
            <HeaderContainer />
            <Switch>
                <Route exact path="/" component={Home} />
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <Route path="/" component={NotFound} />
            </Switch>
        </div>
    );
};

export default App;