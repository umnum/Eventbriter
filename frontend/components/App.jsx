import React from 'react';
import HeaderContainer from './header/header_container';
import Home from './home/home'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <HeaderContainer />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={LoginFormContainer} />
                <Route exact path="/signup" component={SignupFormContainer} />
            </Switch>
        </div>
    );
};

export default App;