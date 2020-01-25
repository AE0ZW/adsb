import React, { useState, useEffect } from 'react';
import './app.css';
import { Map, TileLayer } from 'react-leaflet';
import { poll } from './netService';
import { AirportMarker, FlightMarker } from './components';

const defaultAirportInfo = {
    lat: 35.13778,
    lon: -111.67167,
    name: 'Flagstaff Pulliam Airport',
    code: 'FLG',
    elevation: 7014
}

function App() {
    const [flights, setFlights] = useState([]);
    const [airportInfo, setAirportInfo] = useState(defaultAirportInfo);

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
