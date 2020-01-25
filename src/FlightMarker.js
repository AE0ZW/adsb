import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const iconUrl = 'flight_black_18x18.png';

const icon = new L.Icon({
    iconUrl,
    iconSize: [18, 18],
    popupAnchor: [0, -9]

});

const FlightMarker = ({ lat, lon, flight, speed, altitude, heading }) => {
    return (
        <Marker position={[lat, lon]} icon={icon}>
            <Popup>
                <p>{flight}</p>
                Alt: {altitude}<br />
                Spd: {speed}
            </Popup>
        </Marker>
    );
}

export default FlightMarker;
