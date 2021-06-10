import { html, useEffect, useState } from './Preact.js';

const FlightChart = ({ center = [0, 0], zoom = 1, flights, id = "mapcontainer", height = 500, width = 900 }) => {

    const style = { height, width };

    useEffect(() => {
        const m = L.map(id);
        m.setView(center, zoom);
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            subdomains: ['a', 'b', 'c']
        }).addTo(m);
    }, [])

    return html `<div id=${id} style=${style}><h1>map goes here<//><//>`;
}

export default FlightChart;