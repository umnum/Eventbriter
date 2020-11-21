/* Header component should have: 
  - logged in:
    * a Main Logo button which links to "/"
    * a "Search events" bar
    * a link for "Create Event"
    - a link to the user's liked events, "Likes"
    - a link to the user's "Tickets"
    * a dropdown profile displaying:
        * username and email 
        * a link to "Log out"
  - logged out:
    * a Main Logo button which links to "/"
    * a "Search events" bar
    - a dropdown for "Organize"
    - a dropdown for "Help"
    * a link to "Sign In"
*/
import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.clearErrors = this.clearErrors.bind(this);
        this.clearEventErrors = this.clearEventErrors.bind(this);
        this.logout = this.logout.bind(this);
    }
    clearErrors() {
        this.props.clearErrors();
    }
    clearEventErrors() {
        this.props.clearEventErrors();
    }
    logout() {
        this.props.logout();
        this.props.history.push("/login");
    }
    render() {
        
        let pathname = this.props.location.pathname;
        let isSessionForm = pathname === '/login' || pathname === '/signup';
        let sessionHeaderClass = isSessionForm ? ' session-header' : '';
        return (
            <div className={`header${sessionHeaderClass}`}>
                <div className="left-header">
                    <Link className="home-link" to="/"><i>eventbriter</i></Link>
                </div>
                <div className="right-header">
                    {isSessionForm ? <></> :
                    <div className="dropdown-about-menu">
                            <a className="dropdown-link">
                                <p>About</p>
                                <i className="fas fa-chevron-down"></i>
                            </a>
                        <div className="dropdown-about-content">
                            <a className="about-link" href="https://github.com/umnum/FSProject/wiki">
                                <i className="fab fa-github fa-3x"></i>
                            </a>
                            <a className="about-link" href="https://linkedin.com/in/mcastanieto">
                                <i class="fab fa-linkedin fa-3x"></i>
                            </a>
                            <a className="about-link" href="https://angel.co/u/michael-castanieto">
                                <i class="fab fa-angellist fa-3x"></i>
                            </a>
                        </div>
                    </div>}
                    {!this.props.isLoggedIn() ?
                    <>
                    <Link onClick={this.clearEventErrors} className="create-event-link" to="/events/new"><i className="fas fa-plus"></i><i>Create Event</i></Link>
                    <div className="dropdown-menu">
                            <a className="dropdown-link">
                                <i className="far fa-user fa-lg"></i>
                                <i className="fas fa-chevron-down"></i>
                            </a>
                        <div className="dropdown-content">
                            <h3 id="profile-header-info">
                                <a>{this.props.currentUser.username}</a>
                                <p>{this.props.currentUser.email}</p>
                            </h3>
                            <Link to={`/users/${this.props.currentUser.id}/events`}><h3>Events</h3></Link>
                            <h3 onClick={this.logout}>Log Out</h3>
                        </div>
                    </div> </>: isSessionForm ? <></> :
                        <Link className="signin-link" onClick={this.clearErrors} to="/login">Sign In</Link>
                    }
                 </div>
            </div>
        );
    };
};

export default Header;