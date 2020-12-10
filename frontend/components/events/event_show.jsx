import React from 'react';
import EventMap from './event_map';
import PurchaseTicketModal from '../tickets/purchase_ticket_modal';

class EventShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            on: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handlePurchase = this.handlePurchase.bind(this);
    }

    componentDidMount() {
        this.props.fetchEvent(this.props.match.params.eventId);
        window.scrollTo(0,0);
    }

    toggleModal(toggle) {
        if (toggle) {
            window.scrollTo(0,0);
            document.body.classList.add("stop-scrolling");
        }
        this.setState({on: toggle})
    }

    handlePurchase(e) {
        e.preventDefault();
        this.toggleModal(true);
    }

    render() {
        if (!this.props.event) return null;
        let organizer = this.props.users[this.props.event.organizerId];
        if (!this.props.event || !organizer) return null;
        let startDateTime = new Date(this.props.event.startDate);
        let date = startDateTime.toDateString().split(' ')
        let startDayOfMonth = date[0];
        let startMonth = date[1];
        let startDay = date[2];
        let startYear = date[3];
        let startHours = startDateTime.getHours();
        let startAmOrPm = startHours > 11 ? "PM" : "AM";
        startHours = (startHours % 12 + 1).toLocaleString();
        let startMinutes = startDateTime.getMinutes().toLocaleString();
        startMinutes = (startMinutes.length === 1 ? '0' : '') + startMinutes;
        let endDateTime = new Date(this.props.event.endDate);
        let sameDate = startDateTime.toDateString() === endDateTime.toDateString();
        date = endDateTime.toDateString().split(' ')
        let endDayOfMonth = date[0];
        let endMonth = date[1];
        let endDay = date[2];
        let endYear = date[3];
        let endHours = endDateTime.getHours();
        let endAmOrPm = endHours > 11 ? "PM" : "AM";
        endHours = (endHours % 12 + 1).toLocaleString();
        let endMinutes = endDateTime.getMinutes().toLocaleString();
        endMinutes = (endMinutes.length === 1 ? '0' : '') + endMinutes;
        let tickets = [];
        this.props.tickets.forEach(ticket => {if (ticket.eventId === this.props.event.id) tickets.push(ticket)});
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
                                    <h2>{startMonth}</h2>
                                    <h2>{startDay}</h2>
                                </div>
                                <h1>{this.props.event.name}</h1>
                                <p>{`by ` + organizer.username}</p>
                                <p>{this.props.event.status}</p>
                            </div>
                        </div>
                    </div>
                    <div className="event-show-panel">
                        <div className="event-show-panel-like-share"></div>
                        <div className="event-show-panel-tickets">
                            { this.props.currentUserId === null || this.props.event.status === "Announced" ? <></> : 
                            ( this.props.event.status === "Sold Out" ? 
                            <button id="sold-out">Sold Out</button> : <button onClick={this.handlePurchase}>Tickets</button> )}
                        </div>
                    </div>
                    <div className="event-show-details">
                        <div className="details-description">
                            <h1>{this.props.event.description}</h1>
                        </div>
                        <div className="details-info">
                            <div>
                                <h1>Date and Time</h1>
                                <p>{`${startDayOfMonth}, ${startMonth} ${startDay}, 
                                     ${startYear} ${startHours}:${startMinutes} ${startAmOrPm} - `
                                   + (!sameDate ? `${endDayOfMonth}, ${endMonth} ${endDay}, 
                                     ${endYear} ` : ``) + `${endHours}:${endMinutes} ${endAmOrPm}`}</p>
                            </div>
                            <div>
                                <h1>Location</h1>
                                <p>{this.props.event.location}</p>
                            </div>
                        </div>
                    </div>
                    <div className="event-show-map">
                        { this.props.event.longitude && this.props.event.latitude ? 
                          <EventMap lng={this.props.event.longitude} lat={this.props.event.latitude} /> :
                          <></> }
                    </div>
                </div>
                <PurchaseTicketModal 
                on={this.state.on} 
                toggleModal={this.toggleModal}
                event={this.props.event}
                tickets={tickets}
                updateEvent={this.props.updateEvent}
                updateTicket={this.props.updateTicket}
                currentUser={this.props.users[this.props.currentUserId]}
                purchaseTicket={this.props.purchaseTicket}
                />
            </div>
        );
    }
}

export default EventShow;