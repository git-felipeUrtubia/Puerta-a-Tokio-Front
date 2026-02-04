import React, { useState } from 'react';
import { Utensils, Coffee,  Flame, Star } from 'lucide-react';
import '../../../assets/styles/pages/blog/Gastronomy.css';

export const Gastronomy = () => {
    const [activeFilter, setActiveFilter] = useState('todos');

    // Datos de los platos
    const foodItems = [
        {
            id: 1,
            name: "Ramen",
            jpName: "ラーメン",
            category: "platos",
            desc: "Fideos en caldo sabroso (miso, shoyu o tonkotsu). El alma de la comida rápida japonesa.",
            image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=800&auto=format&fit=crop",
            mustTry: "Ichiran Ramen"
        },
        {
            id: 2,
            name: "Sushi & Sashimi",
            jpName: "寿司",
            category: "platos",
            desc: "Pescado fresco de temporada. Desde cintas giratorias hasta barras exclusivas de omakase.",
            image: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=800&auto=format&fit=crop",
            mustTry: "Tsukiji Outer Market"
        },
        {
            id: 3,
            name: "Takoyaki",
            jpName: "たこ焼き",
            category: "callejera",
            desc: "Bolitas de masa rellenas de pulpo, cocinadas en plancha especial. ¡Cuidado, queman!",
            image: "https://images.unsplash.com/photo-1579888944880-d98341245702?q=80&w=800&auto=format&fit=crop",
            mustTry: "Dotonbori, Osaka"
        },
        {
            id: 4,
            name: "Wagyu",
            jpName: "和牛",
            category: "platos",
            desc: "La carne más suave del mundo. El marmoleado de grasa la hace derretirse en la boca.",
            image: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=800&auto=format&fit=crop",
            mustTry: "Kobe o Hida"
        },
        {
            id: 5,
            name: "Matcha Sweets",
            jpName: "抹茶",
            category: "dulces",
            desc: "Desde helados hasta pasteles tradicionales. El sabor amargo y dulce perfecto.",
            image: "https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?q=80&w=800&auto=format&fit=crop",
            mustTry: "Uji, Kioto"
        },
        {
            id: 6,
            name: "Yakitori",
            jpName: "焼き鳥",
            category: "callejera",
            desc: "Brochetas de pollo a la parrilla con salsa tare. El compañero ideal de una cerveza fría.",
            image: "https://images.unsplash.com/photo-1529193591184-b1d580690dd0?q=80&w=800&auto=format&fit=crop",
            mustTry: "Omoide Yokocho"
        },
        {
            id: 7,
            name: "Taiyaki",
            jpName: "たい焼き",
            category: "dulces",
            desc: "Pastel con forma de pez relleno de pasta de judías rojas (anko) o crema pastelera.",
            image: "https://images.unsplash.com/photo-1627464096052-167cb4433fb1?q=80&w=800&auto=format&fit=crop",
            mustTry: "Asakusa"
        },
        {
            id: 8,
            name: "Okonomiyaki",
            jpName: "お好み焼き",
            category: "platos",
            desc: "La 'pizza japonesa'. Masa, repollo, carne y salsa especial cocinado frente a ti.",
            image: "https://images.unsplash.com/photo-1582267600868-ea48a2099710?q=80&w=800&auto=format&fit=crop",
            mustTry: "Hiroshima style"
        }
    ];

    const filteredFood = activeFilter === 'todos' 
        ? foodItems 
        : foodItems.filter(item => item.category === activeFilter);

    return (
        <div className="gastro-page fade-in">
            
            {/* HERO SECTION */}
            <header className="gastro-hero">
                <div className="gastro-overlay"></div>
                <img 
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1920&auto=format&fit=crop" 
                    alt="Banquete Japonés" 
                    className="gastro-hero-img"
                />
                <div className="gastro-hero-content">
                    <span className="gastro-tag">WASHOKU (和食)</span>
                    <h1 className="gastro-title">Sabores de Japón</h1>
                    <p className="gastro-subtitle">
                        Un viaje culinario donde la presentación es tan importante como el sabor.
                        Prepárate para decir "Itadakimasu".
                    </p>
                </div>
            </header>

            {/* FILTROS */}
            <nav className="gastro-nav">
                <button 
                    className={`filter-btn ${activeFilter === 'todos' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('todos')}
                >Todo</button>
                <button 
                    className={`filter-btn ${activeFilter === 'platos' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('platos')}
                ><Utensils size={16}/> Platos Principales</button>
                <button 
                    className={`filter-btn ${activeFilter === 'callejera' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('callejera')}
                ><Flame size={16}/> Street Food</button>
                <button 
                    className={`filter-btn ${activeFilter === 'dulces' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('dulces')}
                ><Coffee size={16}/> Postres & Café</button>
            </nav>

            {/* GRID DE COMIDA */}
            <section className="gastro-grid-container">
                <div className="gastro-grid">
                    {filteredFood.map(item => (
                        <div key={item.id} className="food-card">
                            <div className="food-img-wrapper">
                                <img src={item.image} alt={item.name} />
                                <span className="food-jp-name">{item.jpName}</span>
                            </div>
                            <div className="food-info">
                                <div className="food-header">
                                    <h3>{item.name}</h3>
                                    <span className={`cat-dot ${item.category}`}></span>
                                </div>
                                <p className="food-desc">{item.desc}</p>
                                <div className="food-footer">
                                    <Star size={14} className="star-icon-g" />
                                    <span>Must Try: <strong>{item.mustTry}</strong></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECCIÓN ETIQUETA */}
            <section className="etiquette-section">
                <div className="etiquette-container">
                    <h2>Etiqueta en la Mesa</h2>
                    <div className="tips-grid">
                        <div className="tip-card">
                            <span className="tip-num">01</span>
                            <h4>Sorber es bueno</h4>
                            <p>Hacer ruido al comer fideos (slurping) es señal de que están deliciosos y ayuda a enfriarlos.</p>
                        </div>
                        <div className="tip-card">
                            <span className="tip-num">02</span>
                            <h4>No claves los palillos</h4>
                            <p>Nunca dejes los palillos clavados verticalmente en el arroz; recuerda a rituales funerarios.</p>
                        </div>
                        <div className="tip-card">
                            <span className="tip-num">03</span>
                            <h4>Oshibori</h4>
                            <p>Usa la toalla húmeda que te dan solo para limpiarte las manos antes de comer, no la cara.</p>
                        </div>
                        <div className="tip-card">
                            <span className="tip-num">04</span>
                            <h4>Kanpai!</h4>
                            <p>No empieces a beber hasta que todos tengan su bebida y se haya hecho el brindis.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};