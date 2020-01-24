import React, { useState, useEffect } from 'react';
import sbs1 from 'sbs1';

const withAircraft = (host, port) => (WrappedComponent) => {
    const [state, setState] = useState([]);

    useEffect(() => {
        const client = sbs1.createClient({ host, port });
        client.on('message', (msg) => {
            state.push(msg);
            setState(state);
        });

        return () => {
            client.socket_rl.removeAllListeners('on');
        };

    });

    class HOC extends React.Component {
        render() {
            return (
                <WrappedComponent {...this.props} aircraft={state} />
            )
        };
    }

    return HOC;
}

export default withAircraft;

// export default withAircraft(host, port)(component)