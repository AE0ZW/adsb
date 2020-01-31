import React from 'react';
import { Marker, Popup,Tooltip} from 'react-leaflet';
import L from 'leaflet';

export const FlightMarker = ({ lat, lon, flight, speed, altitude, track, hex }) => {

    const icon = new L.DivIcon({
        className: '',
        html: `<i class="material-icons" style="transform:rotate(${track}deg)">flight</i>`,
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
