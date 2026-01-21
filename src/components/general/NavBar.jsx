import { ChevronDown, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/general/NavBar.css';
import logo from '../../../public/logo.png';

export const NavBar = () => {
    const nav = useNavigate();

    return (
        <header className="header-container">
            {/* Barra superior (Idiomas) */}
            <div className='top-bar'>
                <ul className="lang-list">
                    <li><a href="#">ESPAÑOL</a></li>
                    <li><span className="separator">|</span></li>
                    <li><a href="#">PORTUGUÊS</a></li>
                    <li><span className="separator">|</span></li>
                    <li><a href="#">ENGLISH</a></li>
                </ul>
            </div>

            {/* Navegación Principal */}
            <nav className='main-nav'>
                
                {/* Logo */}
                <div className='brand-logo' onClick={() => nav('/home')}>
                    <img src={logo} alt="Puerta a Tokio Logo" />
                </div>

                {/* Menú Central */}
                <ul className="nav-links">
                    <li className='nav-item'>
                        <a href="#" className="nav-link">
                            Destinos <ChevronDown size={14} className="chevron" />
                        </a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Tokio y Kanto</a></li>
                            <li><a href="#">Kioto y Kansai</a></li>
                            <li><a href="#">Hokkaido</a></li>
                            <li><a href="#">Islas Okinawa</a></li>
                            <li><a href="#">Kyushu</a></li>
                        </ul>
                    </li>

                    <li className='nav-item'>
                        <a href="#" className="nav-link">
                            Experiencias <ChevronDown size={14} className="chevron" />
                        </a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Festivales (Matsuri)</a></li>
                            <li><a href="#">Santuarios y Templos</a></li>
                            <li><a href="#">Naturaleza</a></li>
                            <li><a href="#">Barrios Emblemáticos</a></li>
                        </ul>
                    </li>

                    <li className='nav-item'>
                        <a href="#" className="nav-link">
                            Nosotros <ChevronDown size={14} className="chevron" />
                        </a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Nuestra Historia</a></li>
                            <li><a href="#">Inspiración</a></li>
                            <li><a href="#">Contacto</a></li>
                        </ul>
                    </li>

                    <li className='nav-item'>
                        <a href="#" className="nav-link">
                            Blog <ChevronDown size={14} className="chevron" />
                        </a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Guías de Ciudad</a></li>
                            <li><a href="#">Gastronomía</a></li>
                            <li><a href="#">Consejos de Viaje</a></li>
                        </ul>
                    </li>
                </ul>

                {/* Sección Login (Diseño Premium) */}
                <div className='nav-actions'>
                    <button className='btn-account' onClick={() => nav('/home/login')}>
                        <User size={18} className="icon-user" />
                        <span>Mi Cuenta</span>
                    </button>
                </div>

            </nav>
        </header>
    )
}