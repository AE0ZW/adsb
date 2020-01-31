import React, { useEffect, useState } from 'react';
import './app.css';
import { FlightMap, FlightTable, TimeBoard } from './components';
import { datasource } from './config';
import { getAirportsWithin, poll, positionAsList } from './services';

const defaultPosition = [39.833333, -98.583333]; // geographic center of the US
const airportColors = [
    'orangered',
    'limegreen',
    'navy',
    'orange',
    'forestgreen',
    'royalblue'
];

function App() {
    const [flights, setFlights] = useState([]);
    const [zoom, setZoom] = useState(4);
    const [center, setCenter] = useState(defaultPosition);
    const [airports, setAirports] = useState([]);
    const [timezones, setTimezones] = useState(['UTC']);

    useEffect(() => {
        return poll(datasource, setFlights);
    }, []);

    useEffect(() => {
        if (flights.length > 0 && airports.length === 0) {
            let airports = getAirportsWithin(50, positionAsList(flights[0]));
            airports = airports.map((x, i) => {
                x.position = positionAsList(x);
                x.color = airportColors[i % airportColors.length];
                return x;
            });
            setAirports(airports);
            setCenter(airports[0].position);
            timezones.push(airports[0].tz);
            setTimezones(timezones);
            setZoom(9);
        }
    }, [flights, airports.length, timezones]);

    return (
        <div className="container">
            <FlightMap center={center} zoom={zoom} airports={airports} flights={flights} />
            <div className="info">
                <TimeBoard timezones={timezones} />
                <FlightTable headings={['Flight', 'Alt', 'Hdg', 'Spd']} flights={flights} />
            </div>
        </div >
    );
}

export default App;
