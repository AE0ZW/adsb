import React from 'react';
import { Marker, Popup,Tooltip} from 'react-leaflet';
import L from 'leaflet';

const iconUrl = '/assets/flight_black_18x18.png'

export const FlightMarker = ({ lat, lon, flight, speed, altitude, track, hex }) => {

    const icon = new L.DivIcon({
        className: '',
        html: `<img style="transform:rotate(${track}deg)" src=${iconUrl}>`,
        iconSize: [18, 18],
        popupAnchor: [0, -9],
        tooltipAnchor: [9, 0]
    });

    return (
        <Marker position={[lat, lon]} icon={icon}>
            <Popup>
                Altitude {altitude}<br />
                Heading {track}<br />
                Speed {speed}
            </Popup>
            <Tooltip permanent={true} >
                {flight || hex}
            </Tooltip>
        </Marker>
    );
}
