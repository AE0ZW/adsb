import React from 'react';
import Clock from 'react-clock';
import moment from 'moment-timezone';

export const TimezoneClock = ({ tz }) => {
    
    let displayTime = moment().tz(tz).format().substr(0,19);

    return (
        <div style={{ position: 'relative', width: 50 }}>
            <Clock size={50} value={new Date(displayTime)} renderMinuteMarks={false}></Clock>
            <div style={{ textAlign: 'center' }}>
                {tz}
            </div>
        </div>
    );
}