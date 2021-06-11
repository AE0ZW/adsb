import { html, useState } from './Preact.js';
import Navbar from './Navbar.js';
import FlightChart from './FlightChart.js';

const init = { center: [35, -111], zoom: 6 }

const App = props => {
    const [flights, setFlights] = useState([{ icao: "0000", position: [35, -111] }]);

    return html `
    <div class="appContainer">
    <div class="navContainer"><${Navbar} name='ADS-B Flight Tracker'/><//>
    <div class="mapContainer"><${FlightChart} flights=${flights} ...${init}/><//>
    <//>`
}

export default App;