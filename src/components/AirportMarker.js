import React from 'react';
import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';


const iconUrl = 'flight_takeoff_black_18x18.png'

export const AirportMarker = ({ lat, lon, name, code, elevation }) => {

    const icon = new L.DivIcon({
        html: `<img src="${iconUrl}">`,
        iconSize: [18, 18],
        popupAnchor: [0, -9]
    });

    return (
        <Marker position={[lat, lon]} icon={icon}>
            <Popup>
                {name} ({code})<br />
                Elevation {elevation} ft<br />
            </Popup>
        </Marker>
    );
}
