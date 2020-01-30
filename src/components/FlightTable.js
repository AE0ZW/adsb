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
                {flights.map(flight=>(<tr><td>{flight.flight||flight.hex}</td><td>{flight.altitude}</td><td>{flight.track}</td><td>{flight.speed}</td></tr>))}
            </tbody>
        </table>
    );
}
