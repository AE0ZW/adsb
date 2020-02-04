import React, { useEffect, useState } from 'react';
import './app.css';
import { ConfigForm, FlightMap, FlightTable, Overlay, TimeBoard } from './components';
import { getAirports, getCenter, poll } from './services';
import {useLocalstorage} from './hooks';

const defaultPosition = [39.833333, -98.583333]; // geographic center of the US

function App() {
    const [flights, setFlights] = useState([]);
    const [zoom, setZoom] = useState(4);
    const [center, setCenter] = useState(defaultPosition);
    const [airports, setAirports] = useState([]);
    const [timezones, setTimezones] = useState(['UTC']);
    const [overlay, setOverlay] = useState(true);
    const [hostInfo, setHostInfo] = useLocalstorage('dump1090-client', { host: 'localhost', port: 8080 });
    const [isPolling, setIsPolling] = useState(false);
    
    console.dir(hostInfo);
    
    const configFormHandler = config => {
        setHostInfo(config);
        setOverlay(false);
        setIsPolling(true);
    }

    useEffect(() => {
        if (isPolling) {
            return poll(`http://${hostInfo.host}:${hostInfo.port}/data.json`, 1000, setFlights);
        }
    }, [isPolling, hostInfo.host, hostInfo.port]);

    useEffect(() => {
        if (flights.length > 0 && airports.length === 0) {
            const airports = getAirports(flights).slice(0, 6);
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
                <ConfigForm
                    defaultHost={hostInfo.host}
                    defaultPort={hostInfo.port}
                    onSubmit={configFormHandler} />
            </Overlay>
        </div >
    );
}

export default App;
