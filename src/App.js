import React, { useEffect, useState } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import './app.css';
import { AirportMarker, FlightMarker, TimeBoard, FlightTable } from './components';
import PolarGrid from './components/PolarGrid';
import { airport, datasource } from './config';
import { poll } from './services';

function App() {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        return poll(datasource, setFlights);
    }, []);

    return (
        <div className="container">
            <Map className="map" center={[airport.lat, airport.lon]} zoom={9}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png">
                </TileLayer>
                <PolarGrid center={[airport.lat, airport.lon]} color="red"></PolarGrid>
                <AirportMarker {...airport} />
                {flights.map(flight => (<FlightMarker {...flight} />))}
            </Map>
            <div className="info">
                <TimeBoard timezones={['UTC', airport.timezone]}></TimeBoard>
                <FlightTable headings={['Flight', 'Altitude', 'Heading', 'Speed']} flights={flights}></FlightTable>
            </div>
        </div >
    );
}

export default App;
