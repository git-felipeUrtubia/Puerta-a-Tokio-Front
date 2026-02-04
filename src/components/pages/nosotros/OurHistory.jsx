import React from 'react';
import { Compass, MapPin, Users, Anchor, Sparkles } from 'lucide-react';
import '../../../assets/styles/pages/nosotros/OurHistory.css';


const timelineData = [
    {
        year: "2016",
        title: "La Chispa en Kioto",
        description: "Dos viajeros se encuentran en un pequeño ryokan. Comparten una frustración: los tours existentes muestran Japón detrás de un cristal. Nace la idea de abrir una 'puerta' auténtica.",
        icon: <Compass size={24} />,
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop",
        align: "left"
    },
    {
        year: "2018",
        title: "Primera Expedición",
        description: "Lanzamos nuestro primer viaje grupal pequeño. Sin autobuses grandes, solo trenes locales y guías amigos. El concepto de 'Omotenashi' se vuelve nuestro núcleo.",
        icon: <MapPin size={24} />,
        image: "https://images.unsplash.com/photo-1533050487297-09b450131929?q=80&w=800&auto=format&fit=crop",
        align: "right"
    },
    {
        year: "2020-2022",
        title: "Resiliencia y Comunidad",
        description: "El mundo se detuvo, pero nosotros no. Creamos 'Japón en Casa' para mantener vivo el sueño y diseñamos nuevas rutas secretas esperando el reencuentro.",
        icon: <Anchor size={24} />,
        image: "https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?q=80&w=800&auto=format&fit=crop",
        align: "left"
    },
    {
        year: "2023",
        title: "El Gran Reencuentro",
        description: "Las fronteras reabrieron y la demanda explotó. Nuestro equipo creció con expertos locales en Tokio y Osaka, asegurando la calidad humana.",
        icon: <Users size={24} />,
        image: "https://images.unsplash.com/photo-1542640244-7e67286feb53?q=80&w=800&auto=format&fit=crop",
        align: "right"
    },
    {
        year: "Hoy",
        title: "Mirando al Futuro",
        description: "Innovamos con viajes sostenibles y experiencias inmersivas rurales, demostrando que el verdadero Japón está más allá del neón.",
        icon: <Sparkles size={24} />,
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800&auto=format&fit=crop",
        align: "left"
    }
];

export const OurHistory = () => {
    return (
        <div className="history-page-alt">

            {/* HERO */}
            <header className="history-hero-alt">
                <div className="hero-content-alt">
                    <h1 className="hero-title-alt">Nuestro Viaje</h1>
                    <p className="hero-subtitle-alt">
                        De una idea entre amigos a conectar miles de corazones con Japón.
                    </p>
                    <div className="red-divider"></div>
                </div>
            </header>

            {/* LÍNEA DE TIEMPO (GRID) */}
            <section className="timeline-section">
                <div className="timeline-container">

                    {/* La línea vertical de fondo */}
                    <div className="timeline-track"></div>

                    {timelineData.map((item, index) => (
                        <div key={index} className={`timeline-row ${item.align}`}>

                            {/* 1. CONTENIDO (Tarjeta) */}
                            <div className="timeline-content">
                                <div className="timeline-card">
                                    <div className="card-image-wrapper">
                                        <img src={item.image} alt={item.title} className="card-image" />
                                        <span className="card-year">{item.year}</span>
                                    </div>
                                    <div className="card-text">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>

                            {/* 2. ICONO CENTRAL */}
                            <div className="timeline-icon-wrapper">
                                <div className="timeline-icon">
                                    {item.icon}
                                </div>
                            </div>

                            {/* 3. ESPACIO VACÍO (Para mantener la cuadrícula) */}
                            <div className="timeline-spacer"></div>

                        </div>
                    ))}
                </div>
            </section>

            {/* CIERRE: CALL TO ACTION */}
            <section className="history-footer">
                <div className="footer-overlay"></div>
                <img
                    src="https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=1920&auto=format&fit=crop"
                    alt="Faroles japoneses"
                    className="footer-bg-img"
                />

                <div className="footer-content-wrapper">
                    <h2 className="footer-cta-title">Sé parte de nuestro próximo capítulo.</h2>
                    <p className="footer-cta-subtitle">
                        Tu aventura en Japón está esperando ser escrita. <br />
                        No dejes que te la cuenten, vívela.
                    </p>
                    <button className="btn-history-cta" onClick={() => window.scrollTo(0, 0)}>
                        Comenzar mi Viaje
                    </button>
                </div>
            </section>
        </div>
    );
};