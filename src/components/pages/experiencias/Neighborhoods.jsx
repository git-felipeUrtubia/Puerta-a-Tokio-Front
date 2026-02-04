import React, { useState } from 'react';
import { MapPin, ArrowUpRight, Camera, ShoppingBag, Coffee, Zap } from 'lucide-react';
import '../../../assets/styles/pages/experiencias/Neighborhoods.css';


export const Neighborhoods = () => {
    const [activeCity, setActiveCity] = useState('tokio');

    const neighborhoods = [
        // TOKIO
        {
            id: 1,
            name: "Akihabara",
            city: "tokio",
            tag: "Electric Town",
            desc: "El epicentro mundial del anime y la electrónica. Edificios neón y Maid Cafés.",
            img: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?q=80&w=800&auto=format&fit=crop",
            icon: <Zap size={18}/>
        },
        {
            id: 2,
            name: "Shibuya",
            city: "tokio",
            tag: "Moda & Caos",
            desc: "El cruce más famoso del mundo. Juventud, pantallas gigantes y tendencias.",
            img: "https://images.unsplash.com/photo-1542931287-023b922fa89b?q=80&w=800&auto=format&fit=crop",
            icon: <ShoppingBag size={18}/>
        },
        {
            id: 3,
            name: "Shinjuku",
            city: "tokio",
            tag: "Rascacielos",
            desc: "La estación más concurrida. Mezcla de oficinas de lujo y callejones nocturnos.",
            img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop",
            icon: <Camera size={18}/>
        },
        // KIOTO
        {
            id: 4,
            name: "Gion",
            city: "kioto",
            tag: "Geisha District",
            desc: "El barrio de las Geishas. Casas de té de madera y calles empedradas tradicionales.",
            img: "https://images.unsplash.com/photo-1599669528993-9c766e01a6b3?q=80&w=800&auto=format&fit=crop",
            icon: <Coffee size={18}/>
        },
        {
            id: 5,
            name: "Higashiyama",
            city: "kioto",
            tag: "Casco Antiguo",
            desc: "La preservación perfecta del Kioto feudal camino al templo Kiyomizu-dera.",
            img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop",
            icon: <MapPin size={18}/>
        },
        // OSAKA
        {
            id: 6,
            name: "Dotonbori",
            city: "osaka",
            tag: "Gastronomía",
            desc: "Canales iluminados y comida callejera. El corazón palpitante de Osaka.",
            img: "https://images.unsplash.com/photo-1590559899731-a38283952c9c?q=80&w=800&auto=format&fit=crop",
            icon: <Zap size={18}/>
        },
        {
            id: 7,
            name: "Shinsekai",
            city: "osaka",
            tag: "Retro",
            desc: "Un barrio nostálgico con aire a feria antigua y la torre Tsutenkaku.",
            img: "https://images.unsplash.com/photo-1565576352927-4482b86121f1?q=80&w=800&auto=format&fit=crop",
            icon: <Camera size={18}/>
        }
    ];

    const filteredHoods = neighborhoods.filter(n => n.city === activeCity);

    return (
        <div className="hoods-page fade-in">
            
            {/* HERO CLEAN */}
            <header className="hoods-hero">
                <div className="hoods-overlay"></div>
                <img 
                    src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1920&auto=format&fit=crop" 
                    alt="Barrio Japonés" 
                    className="hoods-hero-img"
                />
                <div className="hoods-content">
                    <span className="hoods-badge">GUÍA URBANA</span>
                    <h1 className="hoods-title">Barrios Emblemáticos</h1>
                    <p className="hoods-subtitle">
                        Piérdete en los laberintos de neón y tradición. <br/>
                        Cada distrito tiene su propia alma.
                    </p>
                </div>
            </header>

            {/* SECCIÓN PRINCIPAL */}
            <section className="hoods-body">
                <div className="hoods-container">
                    
                    {/* TABS DE CIUDAD (Limpios) */}
                    <div className="city-tabs-container">
                        <button 
                            className={`city-tab-clean ${activeCity === 'tokio' ? 'active' : ''}`}
                            onClick={() => setActiveCity('tokio')}
                        >
                            TOKIO
                        </button>
                        <button 
                            className={`city-tab-clean ${activeCity === 'kioto' ? 'active' : ''}`}
                            onClick={() => setActiveCity('kioto')}
                        >
                            KIOTO
                        </button>
                        <button 
                            className={`city-tab-clean ${activeCity === 'osaka' ? 'active' : ''}`}
                            onClick={() => setActiveCity('osaka')}
                        >
                            OSAKA
                        </button>
                    </div>

                    {/* GRID DE BARRIOS */}
                    <div className="hoods-grid-clean">
                        {filteredHoods.map(hood => (
                            <div key={hood.id} className="hood-card-clean">
                                <div className="hood-img-clean">
                                    <img src={hood.img} alt={hood.name} />
                                    <div className="hood-cat-pill">
                                        {hood.icon} {hood.tag}
                                    </div>
                                </div>
                                <div className="hood-info-clean">
                                    <div className="hood-title-row">
                                        <h3>{hood.name}</h3>
                                        <ArrowUpRight className="arrow-icon" size={20} />
                                    </div>
                                    <p>{hood.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    );
};