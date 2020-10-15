import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: '', 
            password: '',
            username: '',
            design: {
                email: false,
                password: false,
                username: false
            },
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearErrors = this.clearErrors(this);
        this.focus = this.focus.bind(this);
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

    focus(form) {
        //document.getElementsByClassName('email-field-wrapper')[0].classList.add("new-class");
        return (e) => {
            //this.setState({[form]: e.target.value});
            let email = false;
            let username = false;
            let password = false;
            if (form === 'email') {
                email = true;
            }
            else if (form === 'username') {
                username = true;
            }
            else if (form === 'password') {
                password = true;
            }
            this.setState({design: {email, username, password}});
        };
    }

    blur() {
        this.setState({design: false})
    }

    clearErrors() {
        this.props.clearErrors();
    }

    render() {
        let isLogin = this.props.formType === 'Sign In';
        const errors = this.props.errors.map((error, idx) => {
            return <p key={idx}>{error}</p>;
        });
        let usernameBorder = this.state.design.username ? "new-class" : "";
        let emailBorder = this.state.design.email ? "new-class" : "";
        let passwordBorder = this.state.design.password? "new-class" : "";
        return (
            <div className="session-container">
                <div className="session-form">
                    <h1>{isLogin ? "Log in" : "Sign up"} or {isLogin ? 
                            <Link onClick={this.clearErrors} to="/signup">sign up</Link> :
                            <Link onClick={this.clearErrors} to="/login">log in</Link>}</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className={'field-wrapper'}>
                            <div className={`email-field-wrapper ${emailBorder}`}>
                                <label id="email-label">Email address</label>
                                <input onBlur={this.blur.bind(this)} onFocus={this.focus('email')} onChange={this.handleInput('email')} type="text" value={this.state.email}/>
                            </div>
                        </div>
                        {isLogin ? <></> : 
                        <div className="field-wrapper">
                            <div className={`username-field-wrapper ${usernameBorder}`}>
                                <label id="username-label">Full Name</label>
                                <input onBlur={this.blur.bind(this)} onFocus={this.focus('username')} onChange={this.handleInput('username')} type="text" value={this.state.username}/>
                            </div>
                        </div>}
                        <div className="field-wrapper">
                            <div className={`password-field-wrapper ${passwordBorder}`}>
                                <label id="password-label">Password</label>
                                <input onBlur={this.blur.bind(this)} onFocus={this.focus('password')} onChange={this.handleInput('password')} type="password" value={this.state.password}/>
                            </div>
                        </div>
                        <button type="submit">{isLogin ? "Log In" : "Sign Up"}</button>
                    </form>
                </div>
                <div className="session-errors">
                    {errors}
                </div>
            </div>
        );
    };
};

export default SessionForm;