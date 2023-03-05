import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const [isClicked, setIsClicked] = useState(false);

    const navBarClick = () => {
        setIsClicked(!isClicked)
    }


    return (
        <nav className='nav-bar-container'>
            <Link className='nav-link' to='/'>
                <div className='name-logo'>
                    <h4>JESSICA SWENSON</h4>
                    <h6>web developer</h6>
                </div>
            </Link>
            <div className='nav-links-container'>
                <ul className={isClicked ? 'nav-links-ul' : 'nav-links-ul-closed'} >
                    <Link onClick={navBarClick} className='nav-link' to='/about'>
                        <li>ABOUT</li>
                    </Link>
                    <Link onClick={navBarClick} className='nav-link' to='/projects'>
                        <li>PROJECTS</li>
                    </Link>
                    <Link onClick={navBarClick} className='nav-link' to='/contact'>
                        <li>CONTACT</li>
                    </Link>
                </ul>
                <div style={{ fontSize: '2rem' }} onClick={navBarClick} className={!isClicked ? 'icon' : 'nav-links-ul-closed'}>
                    <i className='fa fa-bars'></i>
                </div>
                <h1 onClick={navBarClick} className={isClicked ? 'exit-nav-show' : 'exit-nav-hide'}>X</h1>

            </div>
        </nav>
    )
};

export default NavBar;