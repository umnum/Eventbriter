import { Redirect, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import React, { Component } from 'react';

const Auth = ({ component: Component, path, loggedIn, exact }) => {
    return (
        <Route 
            path={path}
            exact={exact}
            render={props =>
                !loggedIn ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    );
};

const Protected = ({ component: Component, path, loggedIn, exact }) => {
    return (
        <Route
            path={path}
            exact={exact}
            render={(props) => (
                loggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={"/login"} />
                )
            )}/>
    );
}

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) };
};

export const AuthRoute = withRouter(
    connect(
        mapStateToProps,
        null
    )(Auth)
);

export const ProtectedRoute = withRouter(
    connect(
        mapStateToProps,
        null
    )(Protected));