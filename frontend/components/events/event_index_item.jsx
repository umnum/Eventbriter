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
            <div className="event" key={event.id}>
                <img src={event.photoUrl} />
                <p>{dayOfWeek + ', ' + month + ' ' + day + ', ' + year + ' ' + hours + ':' + minutes + ' ' + amOrPm + ' ' + event.timezone}</p>
                <h3>{event.name}</h3>
                <h3>{event.status}</h3>
            </div>

        );
    }
}

export default EventIndexItem;