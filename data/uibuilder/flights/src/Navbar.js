import { html } from './Preact.js';;

const style = { padding: 10, margin: 0 }

const Navbar = ({ name }) => {
    return html `<nav><h1 style=${style}>${name}</h1></nav>`;
}

export default Navbar;