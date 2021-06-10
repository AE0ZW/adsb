import { html } from 'https://unpkg.com/htm/preact/index.mjs?module';

const Header = ({ name }) => {
    return html `<nav><h1>${name}</h1></nav>`;
}

export default Header;