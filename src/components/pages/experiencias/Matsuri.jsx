import React, { useState } from 'react';
import { Calendar, MapPin, ArrowRight, Star } from 'lucide-react';
import '../../../assets/styles/pages/experiencias/Matsuri.css';

export const Matsuri = () => {
    const [filter, setFilter] = useState('todos');

    const events = [
        {
            id: 1,
            title: "Gion Matsuri",
            jpTitle: "祇園祭",
            city: "Kioto",
            month: "Julio",
            season: "verano",
            desc: "El festival más famoso de Japón transforma Kioto durante todo un mes. Lo más impresionante son los desfiles de las carrozas 'Yamaboko', auténticos museos móviles de hasta 25 metros de altura.",
            img: "https://images.unsplash.com/photo-1564998064619-38b4d8d1544a?q=80&w=1000&auto=format&fit=crop",
            tag: "Imperdible"
        },
        {
            id: 2,
            title: "Sapporo Yuki Matsuri",
            jpTitle: "さっぽろ雪まつり",
            city: "Hokkaido",
            month: "Febrero",
            season: "invierno",
            desc: "Un mundo de fantasía helada. El Parque Odori se llena de esculturas de nieve gigantescas (algunas del tamaño de edificios) que se iluminan mágicamente por la noche.",
            img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=1000&auto=format&fit=crop",
            tag: "Nieve"
        },
        {
            id: 3,
            title: "Aomori Nebuta",
            jpTitle: "ねぶた祭り",
            city: "Aomori",
            month: "Agosto",
            season: "verano",
            desc: "Impresionantes linternas tridimensionales de papel washi que representan guerreros míticos, empujadas por la calle mientras cientos de bailarines 'Haneto' saltan al ritmo de los tambores taiko.",
            img: "https://images.unsplash.com/photo-1627915573752-16c8794c4898?q=80&w=1000&auto=format&fit=crop",
            tag: "Fuego y Luz"
        },
        {
            id: 4,
            title: "Takayama Matsuri",
            jpTitle: "高山祭",
            city: "Takayama",
            month: "Abril / Oct",
            season: "primavera",
            desc: "Considerado uno de los festivales más bellos por su entorno en los Alpes Japoneses. Destaca por sus marionetas mecánicas (karakuri) que realizan acrobacias sobre las carrozas.",
            img: "https://images.unsplash.com/photo-1554796327-0239276d1e4c?q=80&w=1000&auto=format&fit=crop",
            tag: "Tradicional"
        },
        {
            id: 5,
            title: "Takayama Matsuri",
            jpTitle: "高山祭",
            city: "Takayama",
            month: "Abril / Oct",
            season: "otoño",
            desc: "Considerado uno de los festivales más bellos por su entorno en los Alpes Japoneses. Destaca por sus marionetas mecánicas (karakuri) que realizan acrobacias sobre las carrozas.",
            img: "https://images.unsplash.com/photo-1554796327-0239276d1e4c?q=80&w=1000&auto=format&fit=crop",
            tag: "Tradicional"
        }
    ];

    const filteredEvents = filter === 'todos' ? events : events.filter(e => e.season === filter);

    return (
        <div className="festivals-page fade-in">
            
            {/* HERO MINIMALISTA */}
            <header className="fest-hero-minimal">
                <div className="fest-hero-content">
                    <span className="overline">Calendario Cultural</span>
                    <h1 className="fest-main-title">Matsuri</h1>
                    <p className="fest-main-desc">
                        La esencia de Japón no está en sus edificios, sino en sus celebraciones. 
                        Únete a la fiesta de los dioses (Kami).
                    </p>
                </div>
            </header>

            {/* FILTROS DE TEXTO SIMPLE */}
            <nav className="fest-filter-nav">
                {['todos', 'primavera', 'verano', 'otoño', 'invierno'].map((item) => (
                    <button 
                        key={item}
                        className={`text-filter ${filter === item ? 'active' : ''}`}
                        onClick={() => setFilter(item)}
                    >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                ))}
            </nav>

            {/* LISTA ZIG-ZAG */}
            <section className="events-list">
                <div className="events-container">
                    {filteredEvents.map((ev, index) => (
                        <article key={ev.id} className="event-row">
                            
                            {/* IMAGEN (Alterna orden con CSS) */}
                            <div className="event-image-col">
                                <img src={ev.img} alt={ev.title} />
                                <div className="date-badge">
                                    <span className="db-month">{ev.month}</span>
                                    <Calendar size={14} className="db-icon"/>
                                </div>
                            </div>

                            {/* TEXTO */}
                            <div className="event-info-col">
                                <div className="info-content">
                                    <span className="event-tag"><Star size={12}/> {ev.tag}</span>
                                    <h2 className="event-title">
                                        <span className="jp-char">{ev.jpTitle}</span>
                                        {ev.title}
                                    </h2>
                                    <div className="event-meta">
                                        <MapPin size={16} className="meta-icon"/> {ev.city}
                                    </div>
                                    <p className="event-desc">{ev.desc}</p>
                                    
                                    <button className="btn-event-detail">
                                        Ver disponibilidad <ArrowRight size={16}/>
                                    </button>
                                </div>
                            </div>

                        </article>
                    ))}
                </div>
            </section>

        </div>
    );
};