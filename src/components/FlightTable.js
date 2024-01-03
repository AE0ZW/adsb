import React from 'react';
import './flighttable.css'

export const FlightTable = ({ headings, flights }) => {
    return (
        <table className='flight' >
            <thead>
                <tr>
                    {headings.map(text => (<th>{text}</th>))}
                </tr>
            </thead>
            <tbody>
                {flights.map(({ flight, hex, track, altitude, speed }) => (<tr><td>{flight || hex}</td><td>{altitude}</td><td>{track}</td><td>{speed}</td></tr>))}
            </tbody>
        </table>
    );
}
