import { useState, useEffect } from 'react';
import sbs1 from 'sbs1';

const useSbs1 = (host, port) => {
    const [state, setState] = useState({});

    useEffect(() => {
        const socket = new WebSocket(`ws://${host}:${port}`, 'binary');

        socket.addEventListener('message', (msg) => {
            msg.data.text().then(data => {
                const flightInfo = sbs1.parseSbs1Message(data);
                state[flightInfo.hex_ident] = flightInfo;
                setState(state);
            });
        });

        return () => {
            socket.close();
        };
    });

    return state;
}

export default useSbs1;