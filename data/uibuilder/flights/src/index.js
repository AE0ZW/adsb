import { html, render } from './Preact.js';
import { FlightProvider } from './Flights.js';
import App from './App.js';

// run this function when the document is loaded
window.onload = function () {
    uibuilder.start()

    render(html`<${FlightProvider}><${App}/><//>`, document.body);
}