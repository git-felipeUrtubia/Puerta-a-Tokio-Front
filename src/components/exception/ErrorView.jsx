import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ServerCrash, Home, RefreshCcw } from 'lucide-react';
import '../../assets/styles/exception/ErrorView.css';

export const ErrorView = ({ 
    title = "¡Ups! Algo salió mal.", 
    message = "Parece que tenemos un pequeño problema técnico en este momento. Por favor, intenta recargar la página o vuelve un poco más tarde.",
    showHomeButton = true
}) => {
    const navigate = useNavigate();

    const handleReload = () => {
        window.location.reload();
    };

    return (
        <div className="error-view-container fade-in">
            <div className="error-card">
                <div className="error-illustration">
                    <ServerCrash size={80} strokeWidth={1.5} className="error-icon" />
                    {/* Círculos decorativos de fondo */}
                    <div className="circle-bg circle-1"></div>
                    <div className="circle-bg circle-2"></div>
                </div>
                
                <h1 className="error-title">{title}</h1>
                <p className="error-message">{message}</p>

                <div className="error-actions">
                    <button className="btn-error-secondary" onClick={handleReload}>
                        <RefreshCcw size={18} />
                        Recargar Página
                    </button>

                    {showHomeButton && (
                        <button className="btn-error-primary" onClick={() => navigate('/home')}>
                            <Home size={18} />
                            Volver al Inicio
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};