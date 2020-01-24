import React from 'react';
import './app.css';
import { Map, TileLayer } from 'react-leaflet';
import useSbs1 from './useAirspace';

function App() {
    const messages = useSbs1('raspberrypi.local', 30003);
    console.log(messages);

    return (
        <div>
            <Map className="map" center={[35.13778, -111.67167]} zoom={11}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
                 
            </Map>
            <div className="info">

            </div>
        </div >
    );
}

export default App;