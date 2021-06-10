import { html, render } from './Preact.js';

import App from './App.js';

// run this function when the document is loaded
window.onload = function() {
    // Start up uibuilder - see the docs for the optional parameters
    uibuilder.start()

    // Listen for incoming messages from Node-RED
    uibuilder.onChange('msg', function(msg) {
        console.info('[indexjs:uibuilder.onChange] msg received from Node-RED server:', msg)
    })

    render(html `<${App}/>`, document.body);
}