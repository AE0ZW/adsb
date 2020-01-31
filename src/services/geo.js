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
    const from = positionAsObject(position);
    return (a, b) => {
        const distA = haversine(from, positionAsObject(a));
        const distB = haversine(from, positionAsObject(b));

        return distA - distB;
    }
}

const positionAsList = item => [item.latitude || item.lat, item.longitude || item.lon];

const positionAsObject = item => {
    return {
        latitude: item.latitude || item.lat || item[0],
        longitude: item.longitude || item.lon || item[1]
    }
};

const getAveragePosition = list => {
    const positions = list.map(x => positionAsList(x));
    return positions.reduce(([a, b], [c, d]) => [a + c / list.length, b + d / list.length], [0, 0])
}

const colorize = list => list.forEach((x, i) => x.color = colors[i % colors.length]);

const positionize = list => list.forEach((x, i) => x.position = positionAsList(x));

export const getAirports = list => {
    const sorted = [...airports.filter(x => x.country === 'United States')];
    const center = getAveragePosition(list);
    const comparer = getDistanceFromComparer(center);

    sorted.sort(comparer);
    colorize(sorted);
    positionize(sorted);

    return sorted;
}
