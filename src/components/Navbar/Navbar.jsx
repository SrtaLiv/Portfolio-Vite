import React, { useContext, useState } from 'react';
import { DarkModeContext } from "../../context/darkModeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import "./navbar.scss";

function Nav() {
    const { toggle, darkMode } = useContext(DarkModeContext);

    const [isOn, setIsOn] = useState(false);
    const toggleSwitch = () => setIsOn(!isOn);
    return (
        <header>
            <nav className='nav'>
                <h1 className="cssanimation sequence rotateXIn">Liv</h1>
                
                <div className='nav-menu'>
                    <ul className='nav-list'>
                        
                        <li className='nav-item'>
                            <Link className='nav-link' to="inicio" smooth={true} duration={500}>
                                    <FontAwesomeIcon className='nav-icon' icon="fa-solid fa-house" />
                                    Inicio
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link className='nav-link' to='proyecto'smooth={true} duration={500}>
                                    <FontAwesomeIcon className='nav-icon' icon="fa-solid fa-diagram-project" />
                                    Proyectos
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link className='nav-link' to='contacto-container' smooth={true} duration={500}>
                                    <FontAwesomeIcon className='nav-icon' icon="fa-solid fa-heart" />
                                    Contacto
                            </Link>
                        </li>

                    </ul>
                </div>

                <div className='nav-item'>{darkMode ? (
                    <FontAwesomeIcon onClick={toggle} icon="fa-solid fa-sun" />
                ) : (
                    <FontAwesomeIcon onClick={toggle} icon="fa-solid fa-moon" />
                )}
                </div>

            </nav>
        </header>
    );
}

export default Nav;

