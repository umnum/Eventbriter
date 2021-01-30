import React from 'react';
import MarkerManager from '../../util/marker_manager';

class EventMap extends React.Component {

    componentDidMount() {
        const latLng = {lat: this.props.lat, lng: this.props.lng};
        const mapOptions = {
            center: latLng,
            zoom: 13
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map, latLng);
        this.MarkerManager.updateMarker();
    }

    render() {
        return (
            <div id='map-container' ref={ map => this.mapNode = map }>
            </div>
        )
    }
}

export default EventMap;