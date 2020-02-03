import React, { useEffect, useState } from 'react';
import './app.css';
import { FlightMap, FlightTable, TimeBoard } from './components';
import { getAirports, poll, getCenter } from './services';
import { Overlay } from './components';
import { ConfigForm } from './components';

const defaultPosition = [39.833333, -98.583333]; // geographic center of the US

function App() {
    const [flights, setFlights] = useState([]);
    const [zoom, setZoom] = useState(4);
    const [center, setCenter] = useState(defaultPosition);
    const [airports, setAirports] = useState([]);
    const [timezones, setTimezones] = useState(['UTC']);
    const [overlay, setOverlay] = useState(true);
    const [hostInfo, setHostInfo] = useState({ host: '192.168.0.0', port: 8080 });
    const [isPolling, setIsPolling] = useState(false);

    useEffect(() => {
        if (isPolling) {
            return poll(`http://${hostInfo.host}:${hostInfo.port}/data.json`, 1000, setFlights);
        }
    }, [isPolling, hostInfo.host, hostInfo.port]);

    useEffect(() => {
        if (flights.length > 0 && airports.length === 0) {
            const airports = getAirports(flights).slice(0,6);
            setAirports(airports);
            setCenter(getCenter(airports));
            timezones.push(airports[0].tz);
            setTimezones(timezones);
            setZoom(8);
        }
    }, [flights, airports.length, timezones]);

    return (
        <div className="container">
            <FlightMap center={center} zoom={zoom} airports={airports} flights={flights} />
            <div className="info">
                <TimeBoard timezones={timezones} />
                <FlightTable headings={['Flight', 'Alt', 'Hdg', 'Spd']} flights={flights} />
            </div>
            <Overlay visible={overlay}>
                <ConfigForm defaultHost={hostInfo.host} defaultPort={hostInfo.port} onSubmit={formData => {console.log(formData); setHostInfo(formData); setIsPolling(true);setOverlay(false); }}></ConfigForm>
            </Overlay>
        </div >
    );
}

export default App;
