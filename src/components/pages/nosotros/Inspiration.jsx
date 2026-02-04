import React from 'react';
import { Camera, Coffee, Compass, Music, Sun } from 'lucide-react';
import '../../../assets/styles/pages/nosotros/Inspiration.css';

export const Inspiration = () => {
    
    // Datos de las tarjetas para el Grid
    const inspirationItems = [
        {
            id: 1,
            size: "large", // Ocupa 2x2
            title: "Hanami en Primavera",
            category: "Naturaleza",
            image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=800&auto=format&fit=crop",
            desc: "La efímera belleza de los cerezos en flor que tiñe al país de rosa."
        },
        {
            id: 2,
            size: "tall", // Ocupa 1x2 (Vertical)
            title: "Neon Nights",
            category: "Urbano",
            image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800&auto=format&fit=crop",
            desc: "Shinjuku bajo la lluvia: una estética cyberpunk real."
        },
        {
            id: 3,
            size: "normal", // 1x1
            title: "Sabores Callejeros",
            category: "Gastronomía",
            image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?q=80&w=800&auto=format&fit=crop",
            desc: "Takoyaki caliente en Osaka."
        },
        {
            id: 4,
            size: "normal",
            title: "Paz Zen",
            category: "Espiritualidad",
            image: "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?q=80&w=800&auto=format&fit=crop",
            desc: "Jardines de musgo en Kokedera."
        },
        {
            id: 5,
            size: "wide", // 2x1 (Horizontal)
            title: "Monte Fuji al Amanecer",
            category: "Paisajes",
            image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=1200&auto=format&fit=crop",
            desc: "El símbolo eterno de Japón reflejado en el lago Kawaguchiko."
        },
        {
            id: 6,
            size: "normal",
            title: "Cultura Pop",
            category: "Anime",
            image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?q=80&w=800&auto=format&fit=crop",
            desc: "Akihabara: el paraíso Otaku."
        }
    ];

    return (
        <div className="inspiration-page fade-in">
            
            {/* HEADER INTRODUCTORIO */}
            <header className="insp-header">
                <div className="insp-header-content">
                    <span className="insp-tag">Moodboard</span>
                    <h1 className="insp-title">Japón en Esencia</h1>
                    <p className="insp-subtitle">
                        Una colección de momentos, colores y sensaciones para encender tu imaginación. 
                        ¿Qué Japón quieres descubrir?
                    </p>
                </div>
            </header>

            {/* BENTO GRID */}
            <section className="bento-section">
                <div className="bento-grid">
                    {inspirationItems.map((item) => (
                        <div key={item.id} className={`bento-item ${item.size}`}>
                            <img src={item.image} alt={item.title} className="bento-img" />
                            <div className="bento-overlay">
                                <span className="bento-cat">{item.category}</span>
                                <h3 className="bento-title">{item.title}</h3>
                                <p className="bento-desc">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECCIÓN DE FRASES / CURIOSIDADES */}
            <section className="did-you-know">
                <div className="dyk-container">
                    <div className="dyk-card">
                        <Camera size={32} className="dyk-icon" />
                        <h4>Fotogénico</h4>
                        <p>Japón tiene más de 6852 islas, aunque la vida se concentra en 4 principales.</p>
                    </div>
                    <div className="dyk-card">
                        <Coffee size={32} className="dyk-icon" />
                        <h4>Cafeterías</h4>
                        <p>Existen cafeterías donde puedes acariciar búhos, erizos y hasta capibaras.</p>
                    </div>
                    <div className="dyk-card">
                        <Sun size={32} className="dyk-icon" />
                        <h4>Tierra del Sol</h4>
                        <p>El nombre "Nihon" significa literalmente "origen del sol".</p>
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION FINAL */}
            <section className="insp-cta">
                <h2>¿Te sientes inspirado?</h2>
                <button className="btn-insp-cta" onClick={() => window.location.href='/destinos'}>
                    <Compass size={18} />
                    Explorar Destinos
                </button>
            </section>

        </div>
    );
};