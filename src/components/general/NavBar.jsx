import React, { useEffect, useState } from 'react';
import { ChevronDown, User, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SessionTrue } from '../home/SessionTrue.jsx';
import '../../assets/styles/general/NavBar.css';
import logo from '../../../public/logo.png';

export const NavBar = () => {
    const nav = useNavigate();
    const [isOpen, setIsOpen] = useState(false); // Estado para el menú móvil
    const [state, setState] = useState(false);
    const [username, setUsername] = useState('')

    const res = JSON.parse(localStorage.getItem("token"));

    useEffect(() => {
        if (res) {
            setState(true);
            setUsername(`${res.firstName} ${res.lastName}`);
        } else {
            setState(false);
            setUsername('');
        }
    }, [res]);

    // Función para cerrar sesión
    const handleLogout = () => {
        localStorage.removeItem("token"); // O la key que uses
        localStorage.removeItem("user");
        setState(false);
        setUsername('');
        nav('/home/login');
    };

    const Session = () => {
        if (!state) {
            return (
                <div className='nav-actions desktop-only'>
                    <button className='btn-account' onClick={() => nav('/home/login')}>
                        <User size={18} className="icon-user" />
                        <span>Mi Cuenta</span>
                    </button>
                </div>
            )
        }
        // Pasamos la función de logout al componente
        return (<SessionTrue userName={username} onLogout={handleLogout} />)
    }

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

                {/* Logo: Se oculta en móvil SOLO si hay sesión iniciada (para que la hamburguesa quede a la izquierda) */}
                <div
                    className={`brand-logo ${state ? 'hidden-mobile-loggedin' : ''}`}
                    onClick={() => nav('/home')}
                >
                    <img src={logo} alt="Puerta a Tokio Logo" />
                </div>

                {/* Botón Hamburguesa */}
                <div className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                {/* Menú Desplegable */}
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
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

                    {/* Botón Mi Cuenta en el menú móvil: SOLO SE MUESTRA SI NO HAY SESIÓN */}
                    {!state && (
                        <li className='nav-item mobile-only'>
                            <a className='btn-account-mobile' href='/home/login'>
                                <User size={18} /> Mi Cuenta
                            </a>
                        </li>
                    )}
                </ul>

                {/* Sección Login/Avatar (Siempre visible en la barra) */}
                {Session()}

            </nav>
        </header>
    )
}