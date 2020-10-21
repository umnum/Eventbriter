import React from 'react';
import { Link } from 'react-router-dom';

const UserEventIndexItem = ({ event }) => {
    let date = new Date(event.startDate).toDateString().split(' ');
    let month = date[1];
    let day = date[2];
    let year = date[3];
    return (
        <div className="user-index-item">
            <div className="contents-description">
                <div className="event-content-description">
                    <div className="event-content-description-date">
                        <i>{month}</i>
                        <i>{day}</i>
                    </div>
                    <div className="event-content-description-image">
                        {/*<img src={event.photoUrl}/>*/}
                    </div>
                    <div className="event-content-description-info">
                        <div><i>{event.name}</i></div>
                        <div><i>{`${month} ${day}, ${year}`}</i></div>
                    </div>
                </div>
                <div className="sold-content-description"></div>
                <div className="gross-content-description"></div>
                <div className="status-content-description">
                    {event.status}
                </div>
                <div className="user-event-dropdown">
                    <a><i className="fas fa-ellipsis-v"></i></a>
                    <div className="event-dropdown-content">
                        <Link to={`/events/${event.id}`}><p>View</p></Link>
                        <Link to={`/events/${event.id}/edit`}><p>Update</p></Link>
                        <p>Delete</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserEventIndexItem;