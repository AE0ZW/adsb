import { html, useEffect, useState, createContext } from './Preact.js';

export const FlightContext = createContext([]);

export const FlightProvider = ({ ttl, children }) => {
    const [flights, setflights] = useState([]);

    useEffect(() => {
        // Listen for incoming messages from Node-RED
        uibuilder.onChange('msg', ({payload}) => {
            const list = flights.slice()
            const flight = list.find(f => f.icao === payload.icao)
            if (flight) {
                list.splice(flights.indexOf(flight), 1, payload)
            } else {
                list.push(payload)
            }
            setflights(list)
           // console.info('[indexjs:uibuilder.onChange] msg received from Node-RED server:', msg)
        })
    }, [])

    return html`<${FlightContext.Provider} value=${flights}>
    ${children}
<//>`
}