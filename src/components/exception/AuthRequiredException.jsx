import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCircle, LogIn, UserPlus, ArrowLeft } from 'lucide-react';
import '../../assets/styles/exception/AuthRequiredException.css';

export const AuthRequiredException = () => {
    const navigate = useNavigate();

    return (
        <div className="exception-container fade-in">
            <div className="exception-card">
                
                {/* Icono Principal */}
                <div className="exception-icon-wrapper">
                    <UserCircle size={64} strokeWidth={1.5} className="main-icon" />
                </div>
                
                {/* Textos */}
                <h1 className="exception-title">Inicia sesión para continuar</h1>
                <p className="exception-message">
                    Para garantizar la seguridad de tu reserva y gestionar tu itinerario de viaje a Japón, 
                    necesitamos que te identifiques.
                </p>

                {/* Botones de Acción */}
                <div className="exception-actions">
                    <button 
                        className="btn-primary-exception" 
                        onClick={() => navigate('/home/login')}
                    >
                        <LogIn size={18} />
                        Iniciar Sesión
                    </button>
                    
                    <button 
                        className="btn-secondary-exception" 
                        onClick={() => navigate('/home/register')}
                    >
                        <UserPlus size={18} />
                        Crear Cuenta Nueva
                    </button>
                </div>

                {/* Botón Volver */}
                <button className="btn-back-exception" onClick={() => navigate(-1)}>
                    <ArrowLeft size={16} />
                    <span>Volver al detalle del viaje</span>
                </button>
            </div>
        </div>
    );
};