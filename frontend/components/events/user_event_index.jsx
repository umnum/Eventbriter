import React from 'react';
import { Link } from 'react-router-dom';
import UserEventIndexItem from './user_event_index_item';

class UserEventIndex extends React.Component {

    componentDidMount() {
        this.props.fetchEvents();
    }

    render() {
        const currentUserId = this.props.currentUserId;
        let userEvents = this.props.events.map(event => {
            if (event.organizerId === currentUserId) {
                return <UserEventIndexItem key={event.id} event={event} removeEvent={this.props.removeEvent} />
            }
        })
        return (
            <div className="user-events">
                <div className="user-events-title">
                    <h1>Events</h1>
                </div>
                <div className="contents-name">
                    <i>Event</i>
                    <i>Sold</i>
                    <i>Gross</i>
                    <i>Status</i>
                </div>
                <ul>{userEvents}</ul>
            </div>
        );
    }
}

export default UserEventIndex;