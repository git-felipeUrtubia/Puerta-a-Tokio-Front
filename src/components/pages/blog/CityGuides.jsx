import React, { useState } from 'react';
import { Search, MapPin, ArrowRight, BookOpen } from 'lucide-react';
import '../../../assets/styles/pages/blog/CityGuides.css';

export const CityGuides = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Datos simulados de las guías
    const guidesData = [
        {
            id: 1,
            city: "Tokio",
            tag: "Metrópolis",
            title: "Guía definitiva para sobrevivir en Shinjuku",
            desc: "Desde los mejores miradores gratuitos hasta los callejones ocultos de Golden Gai. Todo lo que necesitas saber.",
            image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop",
            readTime: "8 min lectura"
        },
        {
            id: 2,
            city: "Kioto",
            tag: "Historia",
            title: "Ruta de templos: Más allá del Pabellón Dorado",
            desc: "Descubre santuarios zen donde el turismo masivo no llega y encuentra la paz verdadera.",
            image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop",
            readTime: "12 min lectura"
        },
        {
            id: 3,
            city: "Osaka",
            tag: "Gastronomía",
            title: "Kuidaore: Comer hasta reventar en Dotonbori",
            desc: "Takoyaki, Okonomiyaki y Kushikatsu. Los 5 puestos callejeros que no te puedes perder.",
            image: "https://images.unsplash.com/photo-1590559899731-a38283952c9c?q=80&w=800&auto=format&fit=crop",
            readTime: "6 min lectura"
        },
        {
            id: 4,
            city: "Nara",
            tag: "Naturaleza",
            title: "Un día entre ciervos sagrados y Budas gigantes",
            desc: "Cómo organizar tu excursión de un día desde Kioto u Osaka sin perderte nada.",
            image: "https://images.unsplash.com/photo-1599579086699-23d91eb345cb?q=80&w=800&auto=format&fit=crop",
            readTime: "5 min lectura"
        },
        {
            id: 5,
            city: "Hiroshima",
            tag: "Cultura",
            title: "Resiliencia y Paz: Una visita necesaria",
            desc: "Guía respetuosa para visitar el Parque de la Paz y la hermosa isla de Miyajima.",
            image: "https://images.unsplash.com/photo-1575438861962-e6e22c4f8202?q=80&w=800&auto=format&fit=crop",
            readTime: "10 min lectura"
        },
        {
            id: 6,
            city: "Takayama",
            tag: "Tradición",
            title: "Los Alpes Japoneses y el Sake",
            desc: "Explora el casco antiguo de Sanmachi Suji y prueba la mejor carne de Hida.",
            image: "https://images.unsplash.com/photo-1623899146243-71822c9533a0?q=80&w=800&auto=format&fit=crop",
            readTime: "7 min lectura"
        }
    ];

    // Filtrado de guías
    const filteredGuides = guidesData.filter(guide => 
        guide.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        guide.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="guides-page fade-in">
            
            {/* HERO SECTION */}
            <header className="guides-hero">
                <div className="guides-overlay"></div>
                <img 
                    src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1920&auto=format&fit=crop" 
                    alt="Leyendo mapa en Japón" 
                    className="guides-hero-img"
                />
                <div className="guides-content">
                    <span className="guides-badge">BLOG DE VIAJES</span>
                    <h1 className="guides-title">Guías de Ciudad</h1>
                    <p className="guides-subtitle">
                        Consejos locales, rutas secretas y todo lo que necesitas saber antes de aterrizar.
                    </p>
                    
                    {/* BARRA DE BÚSQUEDA */}
                    <div className="search-wrapper">
                        <Search className="search-icon" size={20} />
                        <input 
                            type="text" 
                            placeholder="Buscar ciudad (ej. Kioto, Osaka...)" 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </header>

            {/* GRID DE GUÍAS */}
            <section className="guides-grid-section">
                <div className="guides-container">
                    
                    {filteredGuides.length > 0 ? (
                        <div className="guides-grid">
                            {filteredGuides.map(guide => (
                                <article key={guide.id} className="guide-card">
                                    <div className="guide-img-wrapper">
                                        <img src={guide.image} alt={guide.city} />
                                        <span className="guide-tag">{guide.tag}</span>
                                    </div>
                                    <div className="guide-body">
                                        <div className="guide-meta">
                                            <span className="city-name"><MapPin size={14}/> {guide.city}</span>
                                            <span className="read-time"><BookOpen size={14}/> {guide.readTime}</span>
                                        </div>
                                        <h3 className="guide-card-title">{guide.title}</h3>
                                        <p className="guide-excerpt">{guide.desc}</p>
                                        <button className="btn-read-more">
                                            Leer Artículo <ArrowRight size={16} />
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="no-results">
                            <h3>No encontramos guías para "{searchTerm}"</h3>
                            <p>Intenta con otra ciudad o explora nuestros destinos principales.</p>
                        </div>
                    )}
                    
                </div>
            </section>

        </div>
    );
};