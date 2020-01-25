import React, { useState, useEffect } from 'react';
import './app.css';
import { Map, TileLayer } from 'react-leaflet';
import { poll } from './netService';
import AirportMarker from './AirportMarker';
import FlightMarker from './FlightMarker';

const airportInfo = {
    lat: 35.13778,
    lon: -111.67167,
    name: 'Flagstaff Pulliman Airport',
    code: 'FLG'
}

function App() {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        return poll('http://raspberrypi.local:8080/data.json', setFlights);
    }, []);

    return (
        <div>
            <Map className="map" center={[airportInfo.lat, airportInfo.lon]} zoom={11}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
                {flights.map(flight => (<FlightMarker {...flight} />))}
                <AirportMarker {...airportInfo} />
            </Map>
            <div className="info">

            </div>
        </div >
    );
}

export default App;
