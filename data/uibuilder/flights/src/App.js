import { html, useState } from './Preact.js';
import Navbar from './Navbar.js';
import { Map, Marker } from './Map.js';

const init = { center: [35, -111], zoom: 6 }
const flight = { icao: "ABTEST", call_sign: "SWA1337", lat: 35, lon: -111, heading: 270, color: 'green' };

const App = props => {

    return html`<${Map} ...${init}>
        <${Marker} ...${flight}/>
    <//>
    <div className="overlay">
        <${Navbar} className="navbar" name='ADS-B Flight Tracker'/>
    <//>`
}

export default App;