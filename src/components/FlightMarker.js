import React from 'react';
import { Marker, Popup} from 'react-leaflet';
import L from 'leaflet';

const iconUrl = '/assets/flight_black_18x18.png'

export const FlightMarker = ({ lat, lon, flight, speed, altitude, track }) => {

    const icon = new L.DivIcon({
        className: '',
        html: `<img style="transform:rotate(${track}deg)" src=${iconUrl}>`,
        iconSize: [18, 18],
        popupAnchor: [0, -9]
    });

    return (
        <Marker position={[lat, lon]} icon={icon}>
            <Popup>
                {flight}<br />
                Altitude {altitude}<br />
                Heading {track}<br />
                Speed {speed}
            </Popup>
        </Marker>
    );
}
