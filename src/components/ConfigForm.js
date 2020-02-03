import React, { useState } from 'react';

export const ConfigForm = ({ defaultHost, defaultPort, onSubmit }) => {
    const [host, setHost] = useState(defaultHost);
    const [port, setPort] = useState(defaultPort);

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit({ host, port });
    }

    const styles = {
        backgroundColor: '#fff',
        padding: '1em'
    }

    return (
        <div style={styles}>
            <b>dump1090 Server</b>
            <form onSubmit={handleSubmit}>
                <p><label>Host: <input type='text' value={host} onChange={e=>setHost(e.target.value)}></input></label></p>
                <p><label>Port: <input type='text' value={port} onChange={e=>setPort(e.target.value)}></input></label></p>
                <p><input type='submit' value='Save'></input></p>
            </form>
        </div>
    );
}