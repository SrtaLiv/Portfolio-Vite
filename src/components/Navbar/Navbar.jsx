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
                <Link className='nav-link' to="inicio" smooth={true} duration={600}>
                    <h3 className='logo'>Olivia</h3>
                </Link>

                <div className='nav-item'>{darkMode ? (
                    <FontAwesomeIcon onClick={toggle} icon="fa-solid fa-sun" />
                ) : (
                    <FontAwesomeIcon onClick={toggle} icon="fa-solid fa-moon" />
                )}
                </div>

                <div className='nav-menu'>
                    <ul className='nav-list'>
                        <li className='burguer'>
                            <FontAwesomeIcon icon="fa-solid fa-bars" />
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="sobre-mi" smooth={true} duration={600}>
                                Sobre mi
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link className='nav-link' to='proyectos' smooth={true} duration={600}>
                                Proyectos
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link className='nav-link' to='contacto-container' smooth={true} duration={600}>
                                Contacto
                            </Link>
                        </li>

                    </ul>
                </div>

          

            </nav>
        </header>
    );
}

export default Nav;

