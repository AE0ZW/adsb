export const connect = (url, messageHandler) => {

    const socket = new WebSocket(url, 'binary');

    socket.addEventListener('message', (msg) => {
        msg.data.text().then(messageHandler);
    });

    return () => {
        socket.close();
    };
}

export const poll = (url, interval, messageHandler) => {
    const timer = setInterval(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(messageHandler);
    }, interval);

    return () => {
        clearInterval(timer);
    };
}
