import L from 'leaflet';
import React from 'react';
import { LayerGroup, Marker, Popup } from 'react-leaflet';
import { positionAsList } from '../services';
import PolarGrid from './PolarGrid';

const iconUrl = '/assets/flight_takeoff_black_18x18.png'

export const AirportMarker = ({airport}) => {

    const icon = new L.DivIcon({
        html: `<img src="${iconUrl}">`,
        iconSize: [18, 18],
        popupAnchor: [0, -9]
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
