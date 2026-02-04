import React, { useState, useEffect } from 'react';
import { Card } from '../../home/Card.jsx'; // Asegúrate de que la ruta a Card sea correcta
import { getAllTours, getAllInfo } from '../../../services/Catalog.js';
import { MapPin, Sparkles } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { ErrorView } from '../../exception/ErrorView.jsx';
import '../../../assets/styles/pages/destinos/Destination.css';


export const Destination = () => {
    const [tours, setTours] = useState([]);
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const nav = useNavigate();
    const { option } = useParams();

    const MAPA_DESTINOS = {
        'tokio-kanto': { p1: 'tokio', p2: 'kanto' },
        'kioto-kansai': { p1: 'kioto', p2: 'kansai' },
        'hokkaido': { p1: 'hokkaido', p2: null },
        'islas-okinawa': { p1: 'islas okinawa', p2: null },
        'kyushu': { p1: 'kyushu', p2: null }
    };

    const infoNotFound = {
        "title": "",
        "subtitle": "",
        "title_desc": "",
        "description": "",
        "image_portada": "",
        "image_body": "",
        "region": "",
        "genero": "",
        "excursion": "",
        "catalog": ""
    }

    console.log(option)

    useEffect(() => {
        const loadTours = async () => {
            try {
                const allTours = await getAllTours();
                const allInfo = await getAllInfo();

                const config = MAPA_DESTINOS[option] || { p1: null, p2: null };

                const filtered = allTours.filter(t =>
                    t.route.toLowerCase().includes(config.p1) ||
                    t.route.toLowerCase().includes(config.p2 || config.p1)
                );

                let info = allInfo.find(i => i.catalog == option);

                if (!info) {
                    throw new Error(`No se encontró información para la región: ${option}`);
                }

                setTours(filtered);
                setLoading(false);
                setInfo(info);
            } catch (error) {
                console.log("ERROR: ", error)
                setError(true)
            }
        };
        loadTours();
    }, [option]);

    if (error) {
        return <ErrorView />
    }

    return (
        <div className="destination-page">

            {/* HERO SECTION */}
            <header className="dest-hero">
                <div className="dest-hero-overlay"></div>
                {/* Imagen de fondo sugerida: Cruce de Shibuya o Templo Senso-ji */}
                <img
                    src={info.image_portada}
                    alt="img-main"
                    className="dest-hero-img"
                />

                <div className="dest-hero-content">
                    <span className="dest-tag">REGIÓN {info.region}</span>
                    <h1 className="dest-title">{info.title}</h1>
                    <p className="dest-subtitle">
                        {info.subtitle}
                    </p>
                </div>
            </header>

            {/* INTRODUCCIÓN */}
            <section className="dest-intro">
                <div className="dest-container">
                    <div className="intro-grid">
                        <div className="intro-text">
                            <h2>{info.title_desc}</h2>
                            <p>
                                {info.description}
                            </p>

                            <div className="dest-highlights">
                                <div className="highlight-item">
                                    <Sparkles size={20} className="icon-red" />
                                    <span>{info.genero}</span>
                                </div>
                                <div className="highlight-item">
                                    <MapPin size={20} className="icon-red" />
                                    <span>{info.excursion}</span>
                                </div>
                            </div>
                        </div>

                        {/* Pequeña tarjeta flotante decorativa o mapa */}
                        <div className="intro-visual">
                            <img
                                src={info.image_body}
                                alt="Torre de Tokio"
                                className="intro-img"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* LISTA DE VIAJES (GRID) */}
            <section className="dest-tours">
                <div className="dest-container">
                    <h3 className="section-heading">Itinerarios Alrededores</h3>

                    {loading ? (
                        <div className="loader-container">Cargando experiencias...</div>
                    ) : (
                        <div className="tours-grid">
                            {tours.length > 0 ? (
                                tours.map(tour => (
                                    <Card key={tour.id_tour} tour={tour} />
                                ))
                            ) : (
                                <div className="no-tours">
                                    <p>Pronto tendremos nuevas rutas disponibles para esta región.</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};