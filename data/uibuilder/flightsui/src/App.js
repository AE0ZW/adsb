import { html } from 'https://unpkg.com/htm/preact/index.mjs?module';
import Header from './Header.js';

const App = props => {
    return html `<${Header} name='ADS-B Flight Tracker'/>`
}

export default App;