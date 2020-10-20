import React from 'react';

class EventShow extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchEvent(this.props.match.params.eventId);
    }

    render() {
        if (!this.props.event) return null;
        let organizer = this.props.users[this.props.event.organizerId];
        if (!this.props.event || !organizer) return null;
        let dateTime = new Date(this.props.event.startDate);
        let date = dateTime.toDateString().split(' ')
        let dayOfMonth = date[0];
        let month = date[1];
        let day = date[2];
        let year = date[3];
        let hours = dateTime.getHours();
        let amOrPm = hours > 11 ? "PM" : "AM";
        hours = (hours % 12 + 1).toLocaleString();
        let minutes = dateTime.getMinutes().toLocaleString();
        return (
            <div className="event-show-page">
                <div className="event-show-body">
                    <div className="event-show-header">
                        <div className="event-show-header-image">
                            <img src={this.props.event.photoUrl} />
                        </div>
                        <div className="event-show-header-info">
                            <div className="header-info-container">
                                <div className="header-info-date">
                                    <h2>{month}</h2>
                                    <h2>{day}</h2>
                                </div>
                                <h1>{this.props.event.name}</h1>
                                <p>{`by ` + organizer.username}</p>
                                <p>{this.props.event.status}</p>
                            </div>
                        </div>
                    </div>
                    <div className="event-show-panel">
                        <div className="event-show-panel-like-share"></div>
                        <div className="event-show-panel-like-tickets"></div>
                    </div>
                    <div className="event-show-details">
                        <div className="details-description">
                            <h1>{this.props.event.description}</h1>
                        </div>
                        <div className="details-info">
                            <div>
                                <h1>Date and Time</h1>
                                <p>{`${dayOfMonth}, ${month} ${day}, ${year} ${hours}:${minutes} ${amOrPm}`}</p>
                            </div>
                            <div>
                                <h1>Location</h1>
                                <p>{this.props.event.location}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventShow;