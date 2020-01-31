import airports from 'airport-data';
import haversine from 'haversine';

const colors = [
    'orangered',
    'limegreen',
    'navy',
    'orange',
    'forestgreen',
    'royalblue'
];

const getDistanceFromComparer = (position) => {
    const from = toLatlonObject(position);
    return (a, b) => {
        const distA = haversine(from, toLatlonObject(a));
        const distB = haversine(from, toLatlonObject(b));

        return distA - distB;
    }
}

const toLatlonList = latlon => [latlon.latitude || latlon.lat, latlon.longitude || latlon.lon];

const toLatlonObject = latlon => {
    return {
        latitude: latlon.latitude || latlon.lat || latlon[0],
        longitude: latlon.longitude || latlon.lon || latlon[1]
    }
};

export const getCenter = latlonCollection => {
    const positions = latlonCollection.map(x => toLatlonList(x));
    return positions.reduce(([a, b], [c, d]) => [
        a + c / latlonCollection.length,
        b + d / latlonCollection.length
    ], [0, 0])
}

const addColor = list => list.forEach((x, i) => x.color = colors[i % colors.length]);

const addPosition = latlonCollection => latlonCollection.forEach((x, i) => x.position = toLatlonList(x));

export const getAirports = latlonCollection => {
    const sorted = [...airports.filter(x => x.country === 'United States')];
    const center = getCenter(latlonCollection);
    const comparer = getDistanceFromComparer(center);

    sorted.sort(comparer);
    addColor(sorted);
    addPosition(sorted);

    return sorted;
}
