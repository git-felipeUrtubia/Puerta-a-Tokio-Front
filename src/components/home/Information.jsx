import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/home/Information.css'

export const Information = () => {

    const nav = useNavigate();

    // Datos de las tarjetas para fácil edición
    const infoCards = [
        {
            title: "Expertos en Japón",
            text: "No somos una agencia generalista. Nos especializamos exclusivamente en Japón para ofrecerte secretos locales y acceso exclusivo.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
            )
        },
        {
            title: "Itinerarios a Medida",
            text: "Desde la vibrante Tokio hasta los templos de Kioto. Diseñamos cada detalle de tu viaje basándonos en tus gustos y presupuesto.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.159.69.159 1.006 0Z" />
                </svg>
            )
        },
        {
            title: "Soporte 24/7",
            text: "Viaja con tranquilidad. Nuestro equipo de soporte está disponible en todo momento para asistirte ante cualquier eventualidad.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            )
        },
        {
            title: "Cultura Auténtica",
            text: "Te conectamos con experiencias reales: ceremonias de té, estancias en Ryokans y guías que hablan tu idioma.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
            )
        }
    ];

    return (
        <section id='section-information' className="info-section">
            <div className="info-container">
                <div className="info-header">
                    <h2 className="info-title">Tu viaje soñado a Japón</h2>
                    <p className="info-description">
                        Descubre la armoniosa fusión de pasado y presente con Puerta a Tokio.
                        Nos encargamos de todo para que tú solo te preocupes de disfrutar.
                    </p>
                </div>

                <div className="info-grid">
                    {infoCards.map((card, index) => (
                        <div className="info-card" key={index} onClick={() => nav(`/home/information/custom-itinerary`)}>
                            <div className="info-icon-wrapper">
                                {card.icon}
                            </div>
                            <h3 className="info-card-title">{card.title}</h3>
                            <p className="info-card-text">{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

