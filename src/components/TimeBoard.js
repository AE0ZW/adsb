import React from 'react';
import { TimezoneClock } from '.';

export const TimeBoard = ({ timezones }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '1em' }}>
            {timezones.map(tz => <TimezoneClock tz={tz}></TimezoneClock>)}
        </div>
    );
}
