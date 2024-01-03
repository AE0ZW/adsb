import L from 'leaflet';
import React from 'react';
import { LayerGroup, Marker, Popup } from 'react-leaflet';
import PolarGrid from './PolarGrid';

export const AirportMarker = ({ position, name, iata, altitude, color }) => {

    const icon = new L.DivIcon({
        html: `<i class="material-icons" style="color:${color}">flight_takeoff</i>`,
        iconSize: [24, 24],
        popupAnchor: [0, -12]
    });

    return (
        <LayerGroup>
            <Marker position={position} icon={icon}>
                <Popup>
                    {name} ({iata})<br />
                    Elevation {altitude} ft<br />
                </Popup>
            </Marker>
            <PolarGrid position={position} color={color}></PolarGrid>
        </LayerGroup>
    );
}
