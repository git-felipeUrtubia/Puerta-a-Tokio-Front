import React, { useState } from 'react';
import { Mountain, Trees, Waves, Flower2, Wind, CloudSun, Snowflake, Sun } from 'lucide-react';
import '../../../assets/styles/pages/experiencias/Nature.css';


export const Nature = () => {
    const [filter, setFilter] = useState('todos');

    const natureSpots = [
        {
            id: 1,
            name: "Monte Fuji",
            jpName: "富士山",
            type: "montana",
            location: "Yamanashi / Shizuoka",
            bestSeason: "Todo el año (Nieve en invierno)",
            seasonIcon: <Mountain size={14}/>,
            img: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=1000&auto=format&fit=crop",
            desc: "El símbolo eterno de Japón. Ya sea escalándolo en verano o admirándolo desde la distancia en los lagos, su simetría es hipnotizante."
        },
        {
            id: 2,
            name: "Arashiyama",
            jpName: "嵐山",
            type: "bosque",
            location: "Kioto",
            bestSeason: "Primavera / Otoño",
            seasonIcon: <Trees size={14}/>,
            img: "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?q=80&w=1000&auto=format&fit=crop",
            desc: "Un bosque de bambú que parece de otro mundo. El sonido de los tallos chocando con el viento es considerado uno de los '100 Paisajes Sonoros' de Japón."
        },
        {
            id: 3,
            name: "Kenroku-en",
            jpName: "兼六園",
            type: "jardin",
            location: "Kanazawa",
            bestSeason: "Invierno (Yukitsuri)",
            seasonIcon: <Snowflake size={14}/>,
            img: "https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?q=80&w=1000&auto=format&fit=crop",
            desc: "Uno de los tres grandes jardines de Japón. Famoso por sus cuerdas cónicas (yukitsuri) que protegen los pinos de la nieve pesada."
        },
        {
            id: 4,
            name: "Garganta de Takachiho",
            jpName: "高千穂峡",
            type: "agua",
            location: "Miyazaki",
            bestSeason: "Verano / Otoño",
            seasonIcon: <Sun size={14}/>,
            img: "https://images.unsplash.com/photo-1543166299-cc9041a79f39?q=80&w=1000&auto=format&fit=crop",
            desc: "Un cañón volcánico con cascadas donde puedes remar en bote. Según la leyenda, aquí se esconden los dioses."
        },
        {
            id: 5,
            name: "Hitachi Seaside Park",
            jpName: "ひたち海浜公園",
            type: "jardin",
            location: "Ibaraki",
            bestSeason: "Primavera (Nemophila)",
            seasonIcon: <Flower2 size={14}/>,
            img: "https://images.unsplash.com/photo-1498835334752-646733c39379?q=80&w=1000&auto=format&fit=crop",
            desc: "Colinas enteras cubiertas de flores azules (Nemophila) en primavera o arbustos rojos (Kochia) en otoño."
        },
        {
            id: 6,
            name: "Yakushima",
            jpName: "屋久島",
            type: "bosque",
            location: "Kagoshima (Isla)",
            bestSeason: "Verano",
            seasonIcon: <Trees size={14}/>,
            img: "https://images.unsplash.com/photo-1604928135547-2c9451121d5c?q=80&w=1000&auto=format&fit=crop",
            desc: "Un bosque antiguo cubierto de musgo y cedros milenarios que inspiró la película 'La Princesa Mononoke'."
        }
    ];

    const filteredSpots = filter === 'todos' ? natureSpots : natureSpots.filter(spot => spot.type === filter);

    return (
        <div className="nature-page fade-in">
            
            {/* HERO NATURALEZA */}
            <header className="nature-hero">
                <div className="nature-overlay"></div>
                <img 
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1920&auto=format&fit=crop" 
                    alt="Montañas de Japón" 
                    className="nature-hero-img"
                />
                <div className="nature-content">
                    <span className="nature-tag">SHIZEN (自然)</span>
                    <h1 className="nature-title">Naturaleza Viva</h1>
                    <p className="nature-subtitle">
                        Japón no es solo neón. Es el rugido de los volcanes, el silencio del musgo y la fuerza del mar.
                    </p>
                </div>
            </header>

            {/* SECCIÓN EDUCATIVA: SHINRIN-YOKU */}
            <section className="shinrin-section">
                <div className="nature-container shinrin-layout">
                    <div className="shinrin-text">
                        <h2>Shinrin-yoku <span className="kanji-lg">森林浴</span></h2>
                        <h3>El arte de los "Baños de Bosque"</h3>
                        <p>
                            En Japón, la naturaleza es medicina. El <em>Shinrin-yoku</em> no es hacer senderismo ni deporte; 
                            es sumergirse en la atmósfera del bosque con los cinco sentidos.
                        </p>
                        <p>
                            Se ha demostrado que reduce el estrés, baja la presión arterial y mejora el sistema inmunológico. 
                            Te llevamos a los mejores lugares para desconectar del mundo digital.
                        </p>
                    </div>
                    <div className="shinrin-visual">
                        <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop" alt="Bosque japonés Shinrin-yoku" />
                        <div className="leaf-decor"></div>
                    </div>
                </div>
            </section>

            {/* GALERÍA FILTRABLE */}
            <section className="nature-gallery">
                <div className="nature-container">
                    
                    {/* Filtros Orgánicos */}
                    <nav className="nature-filters">
                        <button className={`n-filter ${filter === 'todos' ? 'active' : ''}`} onClick={() => setFilter('todos')}>Todo</button>
                        <button className={`n-filter ${filter === 'montana' ? 'active' : ''}`} onClick={() => setFilter('montana')}><Mountain size={16}/> Montañas</button>
                        <button className={`n-filter ${filter === 'bosque' ? 'active' : ''}`} onClick={() => setFilter('bosque')}><Trees size={16}/> Bosques</button>
                        <button className={`n-filter ${filter === 'agua' ? 'active' : ''}`} onClick={() => setFilter('agua')}><Waves size={16}/> Agua</button>
                        <button className={`n-filter ${filter === 'jardin' ? 'active' : ''}`} onClick={() => setFilter('jardin')}><Flower2 size={16}/> Jardines</button>
                    </nav>

                    <div className="nature-grid">
                        {filteredSpots.map(spot => (
                            <div key={spot.id} className="nature-card">
                                <div className="n-img-wrapper">
                                    <img src={spot.img} alt={spot.name} />
                                    <div className="season-badge">
                                        {spot.seasonIcon} <span>{spot.bestSeason}</span>
                                    </div>
                                </div>
                                <div className="n-card-body">
                                    <div className="n-card-header">
                                        <span className="n-jp-name">{spot.jpName}</span>
                                        <h3>{spot.name}</h3>
                                        <span className="n-location">{spot.location}</span>
                                    </div>
                                    <p className="n-desc">{spot.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* FOOTER ESTACIONAL */}
            <section className="seasons-strip">
                <div className="nature-container">
                    <h3 className="strip-title">Japón: Un país de 4 caras</h3>
                    <div className="seasons-grid">
                        <div className="season-item spring">
                            <Flower2 className="s-icon"/>
                            <span>Sakura (Primavera)</span>
                        </div>
                        <div className="season-item summer">
                            <Sun className="s-icon"/>
                            <span>Verdor (Verano)</span>
                        </div>
                        <div className="season-item autumn">
                            <Wind className="s-icon"/>
                            <span>Momiji (Otoño)</span>
                        </div>
                        <div className="season-item winter">
                            <Snowflake className="s-icon"/>
                            <span>Nieve (Invierno)</span>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};