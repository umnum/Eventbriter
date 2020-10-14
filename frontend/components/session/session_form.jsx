import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: '', 
            password: '',
            username: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearErrors = this.clearErrors(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
            .then(success => {this.props.history.push('/')});
    }

    handleInput(form) {
        return (e) => {
            this.setState({[form]: e.target.value});
        };
    }

    clearErrors() {
        this.props.clearErrors();
    }

    render() {
        let isLogin = this.props.formType === 'Sign In';
        const errors = this.props.errors.map((error, idx) => {
            return <p key={idx}>{error}</p>;
        });
        return (
            <div className="session-container">
                <header>{isLogin ? "Log In" : "Sign Up"} or {isLogin ? 
                        <Link onClick={this.clearErrors} to="/signup">Sign Up</Link> :
                        <Link onClick={this.clearErrors} to="/login">Log In</Link>}</header>
                <form onSubmit={this.handleSubmit}>
                    <div className="email-field-wrapper">
                        <label>Email address</label>
                        <input onChange={this.handleInput('email')} type="text" value={this.state.email}/>
                    </div>
                    {isLogin ? <></> : 
                    <div className="username-field-wrapper">
                        <label>Full Name</label>
                        <input onChange={this.handleInput('username')} type="text" value={this.state.username}/>
                    </div>}
                    <div className="password-field-wrapper">
                        <label>Password</label>
                        <input onChange={this.handleInput('password')} type="password" value={this.state.password}/>
                    </div>
                    <button type="submit">{isLogin ? "Log In" : "Sign Up"}</button>
                </form>
                {errors}
            </div>
        );
    };
};

export default SessionForm;