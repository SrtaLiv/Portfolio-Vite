import { DarkModeContext } from "../../context/darkModeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-scroll';
import "./navbar.scss";
import { useContext, useState } from "react";

function Nav() {
    const { toggle, darkMode } = useContext(DarkModeContext);

    const [navbarOpen, setnavbarOpen] = useState(false);

    const handleMenuToggle = () => {
        setnavbarOpen(!navbarOpen);  // Alterna el estado del menú
    };

    return (
        <header>
            <nav>
                <Link className='nav-link' to="inicio" smooth={true} duration={600}>
                    <h3 className='logo'>Olivia</h3>
                </Link>


                <ul className={navbarOpen ? 'nav-menu open' : 'nav-menu'}>
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
                </ul>

                <div className="toggles">
                    <div>
                        {darkMode ? (
                            <FontAwesomeIcon onClick={toggle} icon="fa-solid fa-sun" />
                        ) : (
                            <FontAwesomeIcon onClick={toggle} icon="fa-solid fa-moon" />
                        )}
                    </div>
                    <div onClick={handleMenuToggle} className='burguer'>
                        <FontAwesomeIcon icon="fa-solid fa-bars" />
                    </div>
                </div>


            </nav>
        </header >
    );
}
export default Nav;
