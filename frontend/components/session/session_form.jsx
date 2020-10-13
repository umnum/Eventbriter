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
            <div>
                <header>{isLogin ? "Log In" : "Sign Up"} or {isLogin ? 
                        <Link onClick={this.clearErrors} to="/signup">Sign Up</Link> :
                        <Link onClick={this.clearErrors} to="/login">Log In</Link>}</header>
                <form onSubmit={this.handleSubmit}>
                    <label>Email address
                        <input onChange={this.handleInput('email')} type="text" value={this.state.email}/>
                    </label>
                    {isLogin ? <></> : <label>Full Name
                            <input onChange={this.handleInput('username')} type="text" value={this.state.username}/>
                        </label>}
                    <label>Password
                        <input onChange={this.handleInput('password')} type="password" value={this.state.password}/>
                    </label>
                    <button type="submit">{isLogin ? "Log In" : "Sign Up"}</button>
                </form>
                {errors}
            </div>
        );
    };
};

export default SessionForm;