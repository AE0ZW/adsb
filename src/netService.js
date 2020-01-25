export const connect = (url, messageHandler) => {

    const socket = new WebSocket(url, 'binary');

    socket.addEventListener('message', (msg) => {
        msg.data.text().then(messageHandler);
    });

    return () => {
        socket.close();
    };
}

export const poll = (url, messageHandler) => {
    const timer = setInterval(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(messageHandler);
    }, 1000);

    return () => {
        clearInterval(timer);
    };
}
