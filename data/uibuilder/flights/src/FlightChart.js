import { html, useEffect, useState, useRef } from './Preact.js';

const FlightChart = ({
    center = [0, 0],
    zoom = 2,
    flights = []
}) => {

    const mapRef = useRef(null);
    const [markers, setMarkers] = useState([]);
    const [map, setMap] = useState();

    useEffect(() => {
        const map = L.map(mapRef.current).setView(center, zoom);
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            subdomains: ['a', 'b', 'c']
        }).addTo(map);

        setMap(map);

        return () => map.remove();

    }, [center, zoom])

    useEffect(() => {
        if (map) {
            const updatedMarkers = [];
            flights.forEach(f => {
                const marker = markers.find(m => m.id == f.icao);
                if (!marker) { // new
                    const m = L.marker(f.position);
                    m.addTo(map);
                    updatedMarkers.push({ m, id: f.icao });
                } else { // existing
                    marker.m.setLatLng(f.position).update();
                    updatedMarkers.push(m);
                }
                setMarkers(updatedMarkers);
            })
        }
    }, [map, flights])

    const mapContainer = {
        "width": "100%",
        "height": "100%"
    }

    return html `<div style=${mapContainer} ref=${mapRef}/>`;
}

export default FlightChart;