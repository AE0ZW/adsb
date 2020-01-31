import L from 'leaflet';
import React from 'react';
import { LayerGroup, Marker, Popup } from 'react-leaflet';
import { positionAsList } from '../services';
import PolarGrid from './PolarGrid';

export const AirportMarker = ({airport}) => {

    const icon = new L.DivIcon({
        html: `<i class="material-icons">flight_takeoff</i>`,
        iconSize: [24, 24],
        popupAnchor: [0, -12]
    });

    const position = positionAsList(airport);

    return (
        <LayerGroup>
            <Marker position={position} icon={icon}>
                <Popup>
                    {airport.name} ({airport.iata})<br />
                    Elevation {airport.altitude} ft<br />
                </Popup>
            </Marker>
            <PolarGrid position={position} color='red'></PolarGrid>
        </LayerGroup>
    );
}
