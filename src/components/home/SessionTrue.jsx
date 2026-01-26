import React, { useState, useEffect, useRef } from 'react';
import { formatName } from '../../utils/formatters.js';
import { ChevronDown, LogOut, User } from 'lucide-react';
import { Link } from 'react-router-dom'; // Asumiendo que usas React Router
import '../../assets/styles/home/SessionTrue.css';


export const SessionTrue = ({ userName, onLogout }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const nameFormated = formatName(userName)
    // Obtenemos la inicial
    const initial = userName.charAt(0).toUpperCase();

    // Cerrar el menú si se hace clic fuera de él
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [menuRef]);

    return (
        <div className="session-container" ref={menuRef}>

            {/* EL BOTÓN CÁPSULA (Trigger) */}
            <div
                className={`session-pill ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="user-avatar">
                    {initial}
                </div>

                <div className="user-info">
                    <span className="user-name">{nameFormated}</span>
                    {/* La flecha rota si el menú está abierto */}
                    <ChevronDown
                        size={16}
                        className={`chevron-icon ${isOpen ? 'rotate' : ''}`}
                    />
                </div>
            </div>

            {/* EL MENÚ DESPLEGABLE */}
            {isOpen && (
                <div className="session-dropdown">

                    {/* Opción 1: Ir a Perfil */}
                    <Link
                        to="/profile"
                        className="dropdown-item"
                        onClick={() => setIsOpen(false)}
                    >
                        <User size={18} className="item-icon" />
                        <span>Mi Perfil</span>
                    </Link>

                    <div className="dropdown-divider"></div>

                    {/* Opción 2: Cerrar Sesión */}
                    <button
                        className="dropdown-item logout"
                        onClick={() => {
                            setIsOpen(false);
                            if (onLogout) onLogout();
                            localStorage.clear();
                            window.location.reload();
                        }}
                    >
                        <LogOut size={18} className="item-icon" />
                        <span>Cerrar Sesión</span>
                    </button>
                </div>
            )}
        </div>
    );
};


