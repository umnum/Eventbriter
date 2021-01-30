export default class MarkerManager {
    constructor(map, latLng) {
        this.map = map;
        this.marker = new google.maps.Marker({
            position: latLng,
            title: "Event Location"
        });
    }

    updateMarker() {
        this.marker.setMap(this.map);
    }
}