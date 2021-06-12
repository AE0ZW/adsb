import { html } from './Preact.js';;

const style = { padding: 10, margin: 0 }

const Navbar = ({ name, className='navbar' }) => {
    return html `<div className=${className}><nav><h1 style=${style}>${name}<//><//><//>`;
}

export default Navbar;