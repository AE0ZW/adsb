import { html } from './Preact.js';
import Navbar from './Navbar.js';
import FlightChart from './FlightChart.js';

const App = props => {
    return html `<${Navbar} name='ADS-B Flight Tracker' center=${[35,-111]} zoom=${4}/><${FlightChart}><//>`
}

export default App;