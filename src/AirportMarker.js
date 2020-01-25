import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import React from 'react';

const iconUrl = 'flight_takeoff_black_18x18.png';
const icon = new L.Icon({
    iconUrl,
    iconSize: [18, 18],
    popupAnchor: [0, -9]

});

const AirportMarker = ({ lat, lon, name, code }) => {
    return (
        <Marker position={[lat, lon]} icon={icon}>
            <Popup>
                <p>{name}</p>
                <p>{code}</p>
            </Popup>
        </Marker>
    );
}

export default AirportMarker;