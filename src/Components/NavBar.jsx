import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {


    return (
        <nav className='nav-bar-container'>
            <Link className='nav-link' to='/'>
                <div className='name-logo'>
                    <h4>JESSICA SWENSON</h4>
                    <h6>web developer</h6>
                </div>
            </Link>
            <div className='nav-links-container'>
                <ul className='nav-links-ul'>
                    <Link className='nav-link' to='/about'>
                        <li>ABOUT</li>
                    </Link>
                    <Link className='nav-link' to='/projects'>
                        <li>PROJECTS</li>
                    </Link>
                    <Link className='nav-link'>
                        <li>CONTACT</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
};

export default NavBar;