import React from 'react';
import { Link } from 'react-router-dom';

class EventIndexItem extends React.Component {
    render() {
        const { event } = this.props;
        let startDate = new Date(event.startDate);
        let startDateArray = startDate.toDateString().split(' ');
        let dayOfWeek = startDateArray[0];
        let month = startDateArray[1];
        let day = startDateArray[2];
        let year = startDateArray[3];
        let hours = startDate.getHours();
        let amOrPm = hours > 12 ? 'PM' : 'AM';
        hours %= 12;
        hours = hours ? hours.toLocaleString() : '12';
        let minutes = startDate.getMinutes();
        minutes = (minutes > 9 ? '' : '0') + minutes;
        return (
            <div className="event-index-item" key={event.id}>
                <div className="event-index-item-image-wrapper">
                    <div className="event-index-item-image-container">
                        <img src={event.photoUrl} />
                    </div>
                    <div className="status">{event.status}</div>
                </div>
                <div className="event-index-item-content-container">
                    <div className="event-date">{dayOfWeek + ', ' + month + ' ' + day + ', ' + year + ' ' + hours + ':' + minutes + ' ' + amOrPm + ' ' + event.timezone}</div>
                    <div className="event-name">{event.name}</div>
                </div>
            </div>

        );
    }
}

export default EventIndexItem;