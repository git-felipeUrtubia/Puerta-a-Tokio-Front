import React from 'react';
import { Camera } from 'lucide-react';
import '../../assets/styles/home/Galeria.css'; // Verifica que esta ruta sea la tuya

export const Galeria = ({ galerys }) => {
    
    if (!galerys || galerys.length === 0) {
        return null;
    }

    // Duplicamos la lista para el efecto infinito
    const carouselItems = [...galerys, ...galerys];

    return (
        <section id='section-galeria' className="galeria-section fade-in">
            {/* Encabezado */}
            <div className="galeria-header">
                <div className="galeria-tag">
                    <Camera size={16} />
                    <span>Álbum de Fotos</span>
                </div>
                <h2 className="galeria-title">Galería de Viaje</h2>
                <p className="galeria-subtitle">
                    Momentos capturados que cuentan la historia de tu próxima aventura.
                </p>
            </div>

            {/* Contenedor del Carrusel */}
            <div className="carousel-container">
                <div className="carousel-track">
                    {carouselItems.map((item, index) => (
                        <div className="carousel-item" key={index}>
                            <img 
                                src={item.image} 
                                alt={item.name || "Foto de viaje"} 
                                loading="lazy" 
                            />
                            {/* Overlay con Título Centrado */}
                            <div className="item-overlay">
                                <span className="galeria-name">{item.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Degradados laterales */}
            <div className="carousel-overlay-left"></div>
            <div className="carousel-overlay-right"></div>
        </section>
    );
};