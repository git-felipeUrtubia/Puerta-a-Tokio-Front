import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock, Star, CheckCircle } from 'lucide-react';
import '../../assets/styles/travel_details/TravelDetails.css';

export const TravelDetails = ({ id }) => {
    const [activeTab, setActiveTab] = useState('resumen');
    const [trip, setTrip] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulamos la petición que busca por ID.
        // En tu caso real, aquí harías el fetch o filter de tu array de datos.

        // ESTRUCTURA BASADA EN TU IMAGEN:
        const mockDataFromDB = {
            id: 1,
            // He recortado el base64 por limpieza, aquí iría tu string largo
            image: 'https://images.unsplash.com/photo-1528360983277-13d9b152c6d1?q=80&w=2070&auto=format&fit=crop',
            title: 'Corea del Sur y Japón en 12 días.',
            destinations: 'Japón',
            description: 'Descubre la vibrante capital donde el futuro se mezcla con lo tradicional. Una experiencia sensorial única: gastronomía de clase mundial, templos antiguos y tecnología de punta.',
            route: 'Tokio, Kioto, Osaka',
            duration: '12 Día / 11 Noche',
            price: 'USD 4839',
            rating: 2
        };

        setTimeout(() => {
            // Aquí simulamos que encontramos el viaje con ese ID
            setTrip(mockDataFromDB);
            setLoading(false);
        }, 300);
    }, [id]);

    if (loading) return <div className="td-loading">Cargando experiencia...</div>;
    if (!trip) return <div className="td-error">Viaje no encontrado</div>;

    // Renderizamos estrellas basado en el número (trip.rating)
    const renderStars = (count) => {
        return [...Array(5)].map((_, i) => (
            <Star
                key={i}
                size={16}
                className={`star-icon ${i < count ? 'filled' : 'empty'}`}
            />
        ));
    };

    return (
        <div className="travel-details-container">

            {/* HERO SECTION */}
            <div className="td-hero">
                {/* Usamos trip.image que viene de tu objeto */}
                <img src={trip.image} alt={trip.title} className="td-hero-bg" />
                <div className="td-hero-overlay">
                    <div className="td-container">
                        <span className="td-badge">{trip.destinations}</span>
                        <h1 className="td-title">{trip.title}</h1>

                        <div className="td-meta">
                            <span className="td-location">
                                <MapPin size={18} /> {trip.route}
                            </span>
                            <span className="td-rating">
                                {renderStars(trip.rating)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* TABS DE NAVEGACIÓN */}
            <div className="td-nav-wrapper">
                <div className="td-container">
                    <nav className="td-nav">
                        {['resumen', 'itinerario', 'galeria'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`td-nav-btn ${activeTab === tab ? 'active' : ''}`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            {/* CONTENIDO PRINCIPAL (GRID) */}
            <div className="td-container td-content-grid">

                {/* COLUMNA IZQUIERDA: INFORMACIÓN */}
                <div className="td-main-col">

                    {/* TAB: RESUMEN */}
                    {activeTab === 'resumen' && (
                        <div className="td-tab-content fade-in">
                            <h2 className="td-section-title">Detalles del Viaje</h2>

                            <div className="td-highlight-box">
                                <p className="td-description">{trip.description}</p>
                            </div>

                            <div className="td-info-cards">
                                <div className="td-info-card">
                                    <Clock className="td-icon-accent" />
                                    <div>
                                        <h4>Duración</h4>
                                        <p>{trip.duration}</p>
                                    </div>
                                </div>
                                <div className="td-info-card">
                                    <Calendar className="td-icon-accent" />
                                    <div>
                                        <h4>Disponibilidad</h4>
                                        <p>Todo el año</p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="td-subtitle">Destacados de la ruta</h3>
                            <ul className="td-includes-list">
                                {/* Como tu objeto no tiene lista de "includes", separamos la ruta por comas */}
                                {trip.route.split(',').map((city, idx) => (
                                    <li key={idx}>
                                        <CheckCircle size={18} className="check-icon" />
                                        Visita a {city.trim()}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* TAB: ITINERARIO (Placeholder inteligente) */}
                    {activeTab === 'itinerario' && (
                        <div className="td-tab-content fade-in">
                            <div className="td-placeholder-content">
                                <h3>Itinerario Completo</h3>
                                <p>El desglose día a día para <strong>{trip.title}</strong> está disponible al confirmar la reserva o contactando con un agente.</p>
                                <div className="td-timeline-preview">
                                    <div className="td-timeline-item">
                                        <div className="td-timeline-marker"></div>
                                        <h4>Inicio</h4>
                                        <p>Llegada y recepción.</p>
                                    </div>
                                    <div className="td-timeline-item">
                                        <div className="td-timeline-marker"></div>
                                        <h4>Durante el viaje</h4>
                                        <p>Recorrido por {trip.route}.</p>
                                    </div>
                                    <div className="td-timeline-item">
                                        <div className="td-timeline-marker"></div>
                                        <h4>Fin</h4>
                                        <p>Traslado al aeropuerto.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* TAB: GALERÍA */}
                    {activeTab === 'galeria' && (
                        <div className="td-gallery fade-in">
                            {/* Como solo tenemos 1 imagen en el objeto, la mostramos en grande */}
                            <div className="td-gallery-hero">
                                <img src={trip.image} alt="Vista principal" />
                                <span className="gallery-caption">Vista principal del destino</span>
                            </div>
                        </div>
                    )}

                </div>

                {/* COLUMNA DERECHA: PRECIO */}
                <div className="td-sidebar-col">
                    <div className="td-booking-card">
                        <div className="td-price-header">
                            <span className="label">Precio total</span>
                            {/* Renderizamos directamente el string "USD 4839" */}
                            <div className="price-display">
                                {trip.price}
                            </div>
                            <span className="per-person">por persona</span>
                        </div>

                        <hr className="td-divider" />

                        <button className="td-btn td-btn-primary">Reservar Ahora</button>
                        <button className="td-btn td-btn-outline">Consultar Dudas</button>
                    </div>
                </div>

            </div>
        </div>
    );
};
