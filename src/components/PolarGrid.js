import React from 'react';
import { Circle, LayerGroup } from 'react-leaflet';

const radius10nm = 9260;

const PolarGrid = ({ center, color }) => {
    const getRing = m => <Circle center={center} radius={m * radius10nm} color={color} weight={1} fill={false} opacity={0.5}></Circle>;
    return (
        <LayerGroup>
            {[1, 2, 3, 4, 5].map(getRing)}                           
        </LayerGroup>
    );
}

export default PolarGrid;