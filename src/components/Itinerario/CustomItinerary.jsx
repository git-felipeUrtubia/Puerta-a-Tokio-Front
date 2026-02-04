import React, { useState } from 'react';
import { Send, Map, Calendar, Users, Heart } from 'lucide-react';
import '../../assets/styles/itinerario/CustomItinerary.css';

export const CustomItinerary = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        dates: '',
        travelers: 1,
        budget: '',
        interests: [], // Array para guardar intereses seleccionados
        message: ''
    });

    // Opciones de intereses rápidos
    const interestOptions = [
        "Cultura Tradicional", "Anime & Manga", "Gastronomía", 
        "Naturaleza", "Tecnología", "Compras"
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const toggleInterest = (interest) => {
        setFormData(prev => {
            const current = prev.interests;
            if (current.includes(interest)) {
                return { ...prev, interests: current.filter(i => i !== interest) };
            } else {
                return { ...prev, interests: [...current, interest] };
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Solicitud enviada:", formData);
        alert("¡Gracias! Un especialista en Japón te contactará pronto.");
    };

    return (
        <section className="custom-section">
            <div className="custom-container">
                
                {/* COLUMNA IZQUIERDA: INSPIRACIÓN */}
                <div className="custom-info">
                    <span className="subtitle-badge">SOLO PARA TI</span>
                    <h2 className="custom-title">Tu viaje a Japón,<br /> tus reglas.</h2>
                    <p className="custom-desc">
                        No todos los viajeros son iguales. Diseñamos una experiencia 
                        única basada en tus gustos, presupuesto y ritmo de viaje. 
                        Desde rutas ocultas en Kioto hasta los mejores cafés temáticos de Akihabara.
                    </p>

                    <div className="features-list">
                        <div className="feature-item">
                            <div className="feature-icon"><Map size={20} /></div>
                            <div>
                                <h4>Ruta 100% Personalizada</h4>
                                <p>Adaptamos cada día a tus preferencias.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon"><Heart size={20} /></div>
                            <div>
                                <h4>Experiencias Exclusivas</h4>
                                <p>Acceso a lugares que no salen en las guías.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* COLUMNA DERECHA: FORMULARIO */}
                <div className="custom-form-card">
                    <h3>Empieza a planear</h3>
                    <form onSubmit={handleSubmit}>
                        
                        <div className="form-group">
                            <label>Nombre Completo</label>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Ej. Ana García" 
                                value={formData.name} 
                                onChange={handleInputChange} 
                                required 
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Correo Electrónico</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="tu@email.com" 
                                    value={formData.email} 
                                    onChange={handleInputChange} 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label>Viajeros</label>
                                <div className="input-with-icon">
                                    <Users size={18} className="input-icon-inner" />
                                    <input 
                                        type="number" 
                                        name="travelers" 
                                        min="1" 
                                        value={formData.travelers} 
                                        onChange={handleInputChange} 
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>¿Qué te interesa? (Selecciona varios)</label>
                            <div className="interests-grid">
                                {interestOptions.map(option => (
                                    <button
                                        type="button"
                                        key={option}
                                        className={`interest-tag ${formData.interests.includes(option) ? 'selected' : ''}`}
                                        onClick={() => toggleInterest(option)}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Cuéntanos más (Fechas aprox, presupuesto, sueños...)</label>
                            <textarea 
                                name="message" 
                                rows="3" 
                                placeholder="Me gustaría viajar en Abril para ver los cerezos..."
                                value={formData.message} 
                                onChange={handleInputChange}
                            ></textarea>
                        </div>

                        <button type="submit" className="btn-submit-custom">
                            <Send size={18} />
                            Solicitar Presupuesto Gratuito
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};