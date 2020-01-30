import React from 'react';

export const TimezoneLabel = ({ timezone }) => {
    return (
        <div>{timezone.includes('/') ? timezone.split('/')[1] : timezone}</div>
    );
}
