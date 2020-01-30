import haversine from 'haversine';
import airports from 'airport-data';

const defaultOptions = {
    unit: 'nmi'
}

export const geoDist = (start, end, options) => {
    return haversine(positionAsObject(start), positionAsObject(end), options || defaultOptions);
}

export const getComparer = (position, positionSelector) => {
    return (a, b) => {
        return geoDist(position, positionSelector(a)) - geoDist(position, positionSelector(b));
    }
}

export const positionAsList = item => [item.latitude || item.lat, item.longitude || item.lon];
export const positionAsObject = item => {
    return {
        latitude: item.latitude || item.lat || item[0],
        longitude: item.longitude || item.lon || item[1]
    }
};

export const getAirportsWithin = (distance, position) => {
    return airports.filter(airport => haversine(positionAsObject(position), positionAsObject(airport), defaultOptions) <= distance);
}