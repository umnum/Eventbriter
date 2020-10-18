import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
    componentDidMount() {
        this.props.fetchEvents();
    }
    
    render() {
        let eventIndexItems = this.props.events.map(event => {
            return <EventIndexItem key={event.id} event={event} />
        });
        return (
            <ul>{eventIndexItems}</ul>
        );
    }
}

export default EventIndex;