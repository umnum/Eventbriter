import React from 'react';

class EventMap extends React.Component {

    componentDidMount() {
        const mapOptions = {
            center: {lat: this.props.lat, lng: this.props.lng},
            zoom: 13
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);
    }

    render() {
        return (
            <div id='map-container' ref={ map => this.mapNode = map }>
            </div>
        )
    }
}

export default EventMap;