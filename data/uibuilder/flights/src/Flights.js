import { html, useEffect, useState, createContext } from './Preact.js';

export const FlightContext = createContext([]);

const data = [
    { icao: "ABTEST", call_sign: "SWA1337", lat: 35, lon: -111, heading: 270, color: 'green' },
    { icao: "ABTEST", lat: 35.4, lon: -111.4, color: 'red' }
];


export const FlightProvider = ({ children }) => {
    const [flights, setflights] = useState(data);

console.log(flights)
    // useEffect(() => {
    //     // Listen for incoming messages from Node-RED
    //     uibuilder.onChange('msg', msg => {
    //         console.info('[indexjs:uibuilder.onChange] msg received from Node-RED server:', msg)
    //     })
    // }, [])

    return html`<${FlightContext.Provider} value=${flights}>
    ${children}
<//>`
}