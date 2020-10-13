/* Header component should have: 
  - logged in:
    * a Main Logo button which links to "/"
    * a "Search events" bar
    - a link for "Create Event"
    - a link to the user's liked events, "Likes"
    - a link to the user's "Tickets"
    - a dropdown profile displaying:
        - username and password
        - a link to "Log out"
  - logged out:
    - a Main Logo button which links to "/"
    - a "Search events" bar
    - a dropdown for "Organize"
    - a dropdown for "Help"
    - a "Create Event" link to "/signin" and "/signup"
    - a link to "Sign In"
*/
import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.clearErrors = this.clearErrors.bind(this);
        this.logout = this.logout.bind(this);
    }
    clearErrors() {
        this.props.clearErrors();
    }
    logout() {
        this.props.logout();
        this.props.history.push("/signup");
    }
    render() {
        return (
            <div>
                <Link to="/"><i>FSProject</i></Link>
                <input type="text"/>
                {this.props.isLoggedIn() ? <Link onClick={this.clearErrors} to="/login">Sign In</Link> :
                 <div>
                     <h3>{this.props.currentUser.username}</h3>
                     <h4>{this.props.currentUser.email}</h4>
                     <button onClick={this.logout}>Log Out</button>
                 </div>}
            </div>
        );
    };
};

export default Header;