import React, { useState } from 'react';
import { MapPin, Info, ArrowRight, BookOpen } from 'lucide-react';
import '../../../assets/styles/pages/experiencias/Temples.css';


export const Temples = () => {
    const [filter, setFilter] = useState('todos');

    const places = [
        {
            id: 1,
            name: "Fushimi Inari Taisha",
            jpName: "伏見稲荷大社",
            type: "santuario",
            location: "Kioto",
            img: "https://images.unsplash.com/photo-1478436127897-769e1a3f007f?q=80&w=800&auto=format&fit=crop",
            desc: "Famoso por sus miles de puertas Torii bermellón que serpentean por la montaña sagrada. Dedicado a Inari, el dios del arroz."
        },
        {
            id: 2,
            name: "Kinkaku-ji",
            jpName: "金閣寺",
            type: "templo",
            location: "Kioto",
            img: "https://images.unsplash.com/photo-1545564441-6784a96a1716?q=80&w=800&auto=format&fit=crop",
            desc: "El Pabellón Dorado. Un templo zen cubierto completamente de hojas de oro puro, reflejándose en el estanque espejo."
        },
        {
            id: 3,
            name: "Senso-ji",
            jpName: "浅草寺",
            type: "templo",
            location: "Tokio (Asakusa)",
            img: "https://images.unsplash.com/photo-1565551576433-286c07bb5c74?q=80&w=800&auto=format&fit=crop",
            desc: "El templo más antiguo de Tokio. Su enorme linterna roja en la puerta Kaminarimon es un ícono de la ciudad."
        },
        {
            id: 4,
            name: "Itsukushima",
            jpName: "厳島神社",
            type: "santuario",
            location: "Miyajima",
            img: "https://images.unsplash.com/photo-1505440484611-23c171ad6e96?q=80&w=800&auto=format&fit=crop",
            desc: "El santuario flotante. Su gran Torii parece flotar sobre el mar durante la marea alta. Una de las vistas más bellas de Japón."
        },
        {
            id: 5,
            name: "Todai-ji",
            jpName: "東大寺",
            type: "templo",
            location: "Nara",
            img: "https://images.unsplash.com/photo-1621683416591-64d63478c95c?q=80&w=800&auto=format&fit=crop",
            desc: "Hogar del Gran Buda (Daibutsu) de bronce más grande del mundo. El edificio principal es la estructura de madera más grande del planeta."
        },
        {
            id: 6,
            name: "Meiji Jingu",
            jpName: "明治神宮",
            type: "santuario",
            location: "Tokio (Harajuku)",
            img: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=800&auto=format&fit=crop",
            desc: "Un oasis de bosque en medio de la ciudad. Dedicado a los espíritus del Emperador Meiji y la Emperatriz Shoken."
        }
    ];

    const filteredPlaces = filter === 'todos' ? places : places.filter(p => p.type === filter);

    return (
        <div className="shrine-page fade-in">
            
            {/* HERO ZEN */}
            <header className="shrine-hero">
                <div className="shrine-overlay"></div>
                <img 
                    src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1920&auto=format&fit=crop" 
                    alt="Templo Japonés Zen" 
                    className="shrine-hero-img"
                />
                <div className="shrine-hero-content">
                    <span className="zen-tag">ESPIRITUALIDAD</span>
                    <h1 className="shrine-title">Santuarios y Templos</h1>
                    <p className="shrine-subtitle">
                        El camino de los Kami y las enseñanzas de Buda. <br/>
                        Descubre el silencio que habita en el corazón de Japón.
                    </p>
                </div>
            </header>

            {/* SECCIÓN EDUCATIVA (Sintoísmo vs Budismo) */}
            <section className="duality-section">
                <div className="duality-container">
                    <div className="duality-header">
                        <h2>¿Santuario o Templo?</h2>
                        <p>Aunque conviven en armonía, son religiones distintas. Aprende a identificarlos.</p>
                    </div>
                    
                    <div className="duality-cards">
                        {/* SINTOÍSMO */}
                        <div className="edu-card shinto">
                            <div className="edu-icon-wrapper">
                                <span className="edu-kanji">神</span>
                            </div>
                            <h3>Santuarios (Jinja)</h3>
                            <span className="religion-label">SINTOÍSMO</span>
                            <ul className="edu-list">
                                <li><strong>Entrada:</strong> Puerta Torii (⛩️)</li>
                                <li><strong>Guardianes:</strong> Zorros (Kitsune) o Perros-León (Komainu)</li>
                                <li><strong>Ritual:</strong> Reverencia, aplausos, reverencia.</li>
                                <li><strong>Tema:</strong> Naturaleza, vida, celebración.</li>
                            </ul>
                        </div>

                        {/* BUDISMO */}
                        <div className="edu-card buddhist">
                            <div className="edu-icon-wrapper">
                                <span className="edu-kanji">仏</span>
                            </div>
                            <h3>Templos (Tera)</h3>
                            <span className="religion-label">BUDISMO</span>
                            <ul className="edu-list">
                                <li><strong>Entrada:</strong> Puerta Sanmon (Techo grande)</li>
                                <li><strong>Guardianes:</strong> Reyes Nio (Musculosos)</li>
                                <li><strong>Ritual:</strong> Juntar palmas en silencio (Gassho).</li>
                                <li><strong>Tema:</strong> Iluminación, más allá, funerales.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* LISTA DE LUGARES */}
            <section className="sacred-places">
                <div className="places-container">
                    
                    {/* Filtros Simples */}
                    <div className="places-filter">
                        <button className={`p-filter-btn ${filter === 'todos' ? 'active' : ''}`} onClick={() => setFilter('todos')}>Todos</button>
                        <button className={`p-filter-btn ${filter === 'santuario' ? 'active' : ''}`} onClick={() => setFilter('santuario')}>Santuarios</button>
                        <button className={`p-filter-btn ${filter === 'templo' ? 'active' : ''}`} onClick={() => setFilter('templo')}>Templos</button>
                    </div>

                    <div className="places-grid">
                        {filteredPlaces.map(place => (
                            <div key={place.id} className="place-card">
                                <div className="place-img-wrap">
                                    <img src={place.img} alt={place.name} />
                                    <span className={`type-badge ${place.type}`}>
                                        {place.type === 'santuario' ? '⛩️ Santuario' : '☸️ Templo'}
                                    </span>
                                </div>
                                <div className="place-content">
                                    <div className="place-titles">
                                        <h4 className="jp-name-sm">{place.jpName}</h4>
                                        <h3>{place.name}</h3>
                                    </div>
                                    <div className="place-meta">
                                        <MapPin size={16}/> {place.location}
                                    </div>
                                    <p className="place-desc">{place.desc}</p>
                                    <button className="btn-place-link">
                                        Ver detalles <ArrowRight size={16}/>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* RITUAL GUIDE */}
            <section className="ritual-guide">
                <div className="ritual-container">
                    <div className="ritual-intro">
                        <BookOpen size={32} className="ritual-icon"/>
                        <h2>Cómo rezar (O-mairi)</h2>
                        <p>El respeto es más importante que la perfección, pero aquí tienes los pasos básicos para un santuario sintoísta.</p>
                    </div>
                    
                    <div className="steps-row">
                        <div className="step-item">
                            <span className="step-num">1</span>
                            <h4>Reverencia</h4>
                            <p>Haz una pequeña reverencia antes de cruzar el Torii. Camina por los lados del camino (el centro es para los dioses).</p>
                        </div>
                        <div className="step-item">
                            <span className="step-num">2</span>
                            <h4>Purificación</h4>
                            <p>En la fuente (Temizuya), lávate la mano izquierda, luego la derecha y enjuágate la boca.</p>
                        </div>
                        <div className="step-item">
                            <span className="step-num">3</span>
                            <h4>Ofrenda</h4>
                            <p>Lanza suavemente una moneda (5 yenes es buena suerte) en la caja de ofrendas.</p>
                        </div>
                        <div className="step-item">
                            <span className="step-num">4</span>
                            <h4>Rezo</h4>
                            <p>Haz 2 reverencias profundas, da 2 aplausos, pide tu deseo y finaliza con 1 reverencia.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};