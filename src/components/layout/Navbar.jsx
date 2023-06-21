import React from 'react'
import CardWidget from '../common/CartWidget'
const Navbar = () => {
    return (
        <div>
            <ul className='navbar'>
                <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png" alt="" />
                <li>todas</li>
                <li>procesadores</li>
                <li>gabinetes</li>
                <li>monitores</li>
                <li><CardWidget /></li>
            </ul>
        </div>
    )
}




export default Navbar 