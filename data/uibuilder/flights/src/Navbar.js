import { html } from './Preact.js';;

const Navbar = ({ name }) => {
    return html `<nav><h1>${name}</h1></nav>`;
}

export default Navbar;