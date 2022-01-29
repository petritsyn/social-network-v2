import React from 'react';
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <a href="#">Profile</a>
            <a href="#">Messages</a>
            <a href="#">Music</a>
        </nav>
    )
}

export default Navbar;