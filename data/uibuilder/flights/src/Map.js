import { html, useEffect, useState, useRef, useContext, createContext } from './Preact.js';


let MapContext = createContext();

export const Map = ({
    center = [0, 0],
    zoom = 2,
    children
}) => {

    const mapRef = useRef(null);
    const [map, setMap] = useState();

    useEffect(() => {
        const map = L.map(mapRef.current);
        MapContext = createContext(map);
        map.setView(center, zoom);
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            subdomains: ['a', 'b', 'c']
        }).addTo(map);

        setMap(map);

        return () => map.remove();

    }, [])

    const mapContainer = {
        "width": "100%",
        "height": "100%"
    }

    return html`<div style=${mapContainer} ref=${mapRef}>
        <${MapContext.Provider} value=${map}>
            ${children}
        <//>
    <//>`;
}

export const Marker = ({ icao, call_sign, lat, lon, heading = 0, color = 'black' }) => {
    const map = useContext(MapContext);

    useEffect(() => {
        if (map && lat && lon) {
            const icon = new L.DivIcon({
                className: '',
                html: `<i class="material-icons" style="transform:rotate(${heading}deg);color:${color}">flight</i>`,
                iconSize: [32, 32],
                popupAnchor: [0, -16],
                tooltipAnchor: [16, 0]
            });

            const marker = L.marker([lat, lon], { title: call_sign || icao, icon }).addTo(map);

            return () => marker.remove(map);
        }

    }, [lat, lon, heading, call_sign, map])

    return;
}
