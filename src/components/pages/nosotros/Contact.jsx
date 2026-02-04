import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import '../../../assets/styles/pages/nosotros/Contact.css';


export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría tu lógica de envío (backend o email service)
        alert(`¡Gracias ${formData.name}! Hemos recibido tu mensaje.`);
    };

    return (
        <div className="contact-page fade-in">
            
            {/* HERO SECTION */}
            <header className="contact-hero">
                <div className="contact-hero-overlay"></div>
                <img 
                    src="https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=1920&auto=format&fit=crop" 
                    alt="Estación de tren japonesa" 
                    className="contact-hero-img"
                />
                <div className="contact-hero-content">
                    <span className="contact-tag">HABLEMOS</span>
                    <h1 className="contact-title">¿Listo para despegar?</h1>
                    <p className="contact-subtitle">
                        Ya sea que tengas una duda puntual o quieras diseñar el viaje de tu vida, 
                        nuestro equipo de expertos está a un clic de distancia.
                    </p>
                </div>
            </header>

            <div className="contact-container">
                
                {/* GRID PRINCIPAL: INFO + FORM */}
                <div className="contact-grid">
                    
                    {/* COLUMNA IZQUIERDA: INFORMACIÓN */}
                    <div className="contact-info">
                        <div className="info-header">
                            <h2>Ponte en contacto</h2>
                            <p>Estamos en Santiago, pero nuestro corazón está en Tokio. Respondemos a todas las solicitudes en menos de 24 horas.</p>
                        </div>

                        <div className="info-cards">
                            <div className="info-card">
                                <div className="icon-box"><Phone size={24} /></div>
                                <div>
                                    <h4>Llámanos</h4>
                                    <p>+56 9 1234 5678</p>
                                    <span className="info-sub">Lunes a Viernes, 9am - 6pm</span>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="icon-box"><Mail size={24} /></div>
                                <div>
                                    <h4>Escríbenos</h4>
                                    <p>info@puertaatokio.travel</p>
                                    <span className="info-sub">Soporte general y ventas</span>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="icon-box"><MapPin size={24} /></div>
                                <div>
                                    <h4>Visítanos</h4>
                                    <p>Av. Providencia 1234, Of. 601</p>
                                    <span className="info-sub">Santiago, Chile (Cita previa)</span>
                                </div>
                            </div>
                        </div>

                        {/* Pequeña nota de atención */}
                        <div className="support-note">
                            <Clock size={20} className="note-icon" />
                            <p>
                                <strong>¿Ya estás viajando?</strong><br/>
                                Recuerda que tienes soporte 24/7 a través de nuestro WhatsApp exclusivo para clientes.
                            </p>
                        </div>
                    </div>

                    {/* COLUMNA DERECHA: FORMULARIO */}
                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <h3>Envíanos un mensaje</h3>
                            
                            <div className="form-group">
                                <label>Nombre Completo</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Ej. Martín Rivas" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>

                            <div className="form-group">
                                <label>Correo Electrónico</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="tucorreo@ejemplo.com" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>

                            <div className="form-group">
                                <label>Asunto</label>
                                <div className="select-wrapper">
                                    <MessageSquare size={18} className="select-icon" />
                                    <select 
                                        name="subject" 
                                        value={formData.subject}
                                        onChange={handleChange}
                                    >
                                        <option value="">Selecciona un motivo</option>
                                        <option value="presupuesto">Solicitar Presupuesto</option>
                                        <option value="duda">Duda sobre Itinerario</option>
                                        <option value="colaboracion">Colaboraciones</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Mensaje</label>
                                <textarea 
                                    name="message" 
                                    rows="5" 
                                    placeholder="Cuéntanos cómo podemos ayudarte..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-send">
                                <Send size={18} /> Enviar Mensaje
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            {/* MAPA (Full Width) */}
            <section className="map-section">
                <iframe 
                    title="Ubicación Puerta a Tokio"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.603310939527!2d-70.61276732355554!3d-33.43362177339556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf7a2169601d%3A0x63391993247f0c10!2sAv.%20Providencia%2C%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1709668404652!5m2!1ses!2scl" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>

        </div>
    );
};