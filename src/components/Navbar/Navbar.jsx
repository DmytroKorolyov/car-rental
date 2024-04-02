import React from 'react';
import { Link } from 'react-router-dom';
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav>
            <ul className={s.navbar}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/catalog">Catalog</Link></li>
                <li><Link to="/favorites">Favorites</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;

