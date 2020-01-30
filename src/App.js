import React, { useEffect, useState } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import './app.css';
import { AirportMarker, FlightMarker, FlightTable, TimeBoard } from './components';
import { datasource } from './config';
import { positionAsList, getAirportsWithin, poll } from './services';

const defaultPosition = [39.833333, -98.583333]; // geographic center of the US

function App() {
    const [flights, setFlights] = useState([]);
    const [zoom, setZoom] = useState(4);
    const [mapCenter, setMapCenter] = useState(defaultPosition);
    const [airports, setAirports] = useState([]);
    const [timezones, setTimezones] = useState(['UTC']);

    useEffect(() => {
        return poll(datasource, setFlights);
    }, []);

    useEffect(() => {
        if (flights.length > 0 && airports.length === 0) {
            const airports = getAirportsWithin(50, positionAsList(flights[0]));
            const primary = airports[0];
            setAirports(airports);
            setMapCenter(positionAsList(primary));
            timezones.push(primary.tz);
            setTimezones(timezones);
            setZoom(9);
        }
    }, [flights, airports.length, timezones]);

    return (
        <div className="container">
            <Map className="map" center={mapCenter} zoom={zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png">
                </TileLayer>
                {airports.map(airport => (<AirportMarker airport={airport} />))}
                {flights.map(flight => (<FlightMarker {...flight} />))}
            </Map>
            <div className="info">
                <TimeBoard timezones={timezones}></TimeBoard>
                <FlightTable headings={['Flight', 'Alt', 'Hdg', 'Speed']} flights={flights}></FlightTable>
            </div>
        </div >
    );
}

export default App;
