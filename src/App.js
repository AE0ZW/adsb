import React, { useState, useEffect } from 'react';
import { poll } from './services';
import { airport, datasource } from './config';
import { Map, TileLayer } from 'react-leaflet';
import { AirportMarker, FlightMarker } from './components';
import './app.css';

function App() {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        return poll({ ...datasource }, setFlights);
    }, []);

    return (
        <div>
            <Map className="map" center={[airport.lat, airport.lon]} zoom={11}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
                <AirportMarker {...airport} />
                {flights.map(flight => (<FlightMarker {...flight} />))}
            </Map>
            <div className="info">

            </div>
        </div >
    );
}

export default App;
