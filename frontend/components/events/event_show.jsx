import React from 'react';

class EventShow extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchEvent(this.props.match.params.eventId);
    }

    render() {
        let organizer = this.props.users[this.props.event.organizerId];
        if (!this.props.event || !organizer) return null;
        return (
            <div className="event-show-page">
                <div className="event-show-body">
                    <div className="event-show-header">
                        <div className="event-show-header-image">
                            <img src={this.props.event.photoUrl} />
                        </div>
                        <div className="event-show-header-info">
                            <div className="header-info-container">
                                <h1>{this.props.event.name}</h1>
                                <p>{`by ` + organizer.username}</p>
                                <p>$10</p>
                            </div>
                        </div>
                    </div>
                    <div className="event-show-panel">
                        <div className="event-show-panel-like-share"></div>
                        <div className="event-show-panel-like-tickets"></div>
                    </div>
                    <div className="event-show-details">
                    </div>
                </div>
            </div>
        );
    }
}

export default EventShow;