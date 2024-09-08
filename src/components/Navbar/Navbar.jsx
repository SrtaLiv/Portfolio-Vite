import { DarkModeContext } from "../../context/darkModeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-scroll';
import "./navbar.scss";
import { useContext, useState } from "react";

function Nav() {
    const { toggle, darkMode } = useContext(DarkModeContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        console.log('click');
        setMenuOpen(!menuOpen);  // Alterna el estado del menú
    };
    return (
        <header>
            <nav>
                <Link className='nav-link' to="inicio" smooth={true} duration={600}>
                    <h3 className='logo'>Olivia</h3>
                </Link>

                <ul>
                    <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                        <li>
                            <Link className='nav-link' to="sobre-mi" smooth={true} duration={600} onClick={handleMenuToggle}>
                                Sobre mi
                            </Link>
                        </li>

                        <li>
                            <Link className='nav-link' to='proyectos' smooth={true} duration={600} onClick={handleMenuToggle}>
                                Proyectos
                            </Link>
                        </li>

                        <li>
                            <Link className='nav-link' to='contacto-container' smooth={true} duration={600} onClick={handleMenuToggle}>
                                Contacto
                            </Link>
                        </li>

                    </div>

                    <li>
                        {darkMode ? (
                            <FontAwesomeIcon onClick={toggle} icon="fa-solid fa-sun" />
                        ) : (
                            <FontAwesomeIcon onClick={toggle} icon="fa-solid fa-moon" />
                        )}
                    </li>
                    <li className='burguer' onClick={handleMenuToggle}>
                        <FontAwesomeIcon icon="fa-solid fa-bars" />
                    </li>
                </ul>
            </nav>
        </header >
    );
}
export default Nav;
