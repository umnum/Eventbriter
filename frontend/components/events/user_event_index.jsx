import React from 'react';
import { Link } from 'react-router-dom';
import UserEventIndexItem from './user_event_index_item';
import DeleteEventModal from './delete_event_modal';


class UserEventIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            on: false
        };
    }

    componentDidMount() {
        this.props.fetchEvents();
    }

    toggleModal(toggle) {
        this.setState({on: toggle})
    }

    render() {
        const currentUserId = this.props.currentUserId;
        let userEvents = this.props.events.map(event => {
            if (event.organizerId === currentUserId) {
                return <UserEventIndexItem key={event.id} event={event} clearEventErrors={this.props.clearEventErrors} removeEvent={this.props.removeEvent} toggleModal={this.toggleModal.bind(this)} currentUserId={this.props.currentUserId} history={this.props.history} />
            }
        })
        return (
            <div className="user-events">
                <div className="user-events-title">
                    <h1>Events</h1>
                </div>
                <DeleteEventModal on={this.state.on} toggleModal={this.toggleModal.bind(this)} />
                <div className="contents-name">
                    <i>Event</i>
                    <i>Tickets</i>
                    <i>Status</i>
                    <i>Manage Event</i>
                </div>
                <ul>{userEvents}</ul>
            </div>
        );
    }
}

export default UserEventIndex;