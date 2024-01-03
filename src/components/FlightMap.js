import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { AirportMarker, FlightMarker } from '.';

export const FlightMap = ({ center, zoom, airports, flights }) => {

    return (
        <MapContainer center={center} zoom={zoom} style={{ height: '99%', width: '100%' }}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png">
            </TileLayer>
            {airports.map(airport => (<AirportMarker {...airport} />))}
            {flights.map(flight => (<FlightMarker {...flight} />))}
        </MapContainer>
    );
}
