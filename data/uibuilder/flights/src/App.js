import { html, useContext, useEffect, useState } from './Preact.js';
import Navbar from './Navbar.js';
import { Map, Marker } from './Map.js';
import { FlightContext } from './Flights.js';

const init = { center: [35, -111], zoom: 6 }

const App = props => {
    const flights = useContext(FlightContext)
    const [markers, setMarkers] = useState([])

    useEffect(() => {
        setMarkers(flights.map(f => html`<${Marker} ...${f}/>`));
    }, [flights])

    return html`<${Map} ...${init}>
        ${markers}
    <//>
    <div className="overlay">
        <${Navbar} className="navbar" name='ADS-B Flight Tracker'/>
    <//>`
}

export default App;