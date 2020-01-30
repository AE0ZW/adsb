import React from 'react';
import { LabeledClock } from '.';

export const TimeBoard = ({ timezones }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '1em' }}>
            {timezones.map(tz => <LabeledClock tz={tz} />)}
        </div>
    );
}
