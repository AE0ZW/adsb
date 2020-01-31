import L from 'leaflet';
import React from 'react';
import { Marker, Popup, Tooltip } from 'react-leaflet';

export const FlightMarker = ({ lat, lon, flight, speed, altitude, track, hex, color }) => {

    const icon = new L.DivIcon({
        className: '',
        html: `<i class="material-icons" style="transform:rotate(${track}deg);color:${color}">flight</i>`,
        iconSize: [24, 24],
        popupAnchor: [0, -12],
        tooltipAnchor: [12, 0]
    });

    return (
        <Marker position={[lat, lon]} icon={icon}>
            <Popup>
                {flight || hex}<br />
                Altitude {altitude}<br />
                Heading {track}<br />
                Speed {speed}
            </Popup>
            <Tooltip opacity={0.7}>
                {flight || hex}
            </Tooltip>
        </Marker>
    );
}
