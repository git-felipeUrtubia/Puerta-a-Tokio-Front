import React, { useState } from 'react';
import { ShieldCheck, Zap, AlertTriangle, Check, X, CreditCard, Train, Smartphone } from 'lucide-react';
import '../../../assets/styles/pages/blog/TravelTips.css';

export const TravelTips = () => {
    const [activeSection, setActiveSection] = useState('preparativos');

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(id);
        }
    };

    return (
        <div className="tips-manual-page fade-in">
            
            {/* HERO SIMPLE */}
            <div className="manual-hero">
                <div className="manual-container">
                    <span className="manual-badge">KNOW BEFORE YOU GO</span>
                    <h1 className="manual-title">Manual del Viajero</h1>
                    <p className="manual-desc">
                        Japón es fascinante pero tiene sus propias reglas. 
                        Aquí tienes la "biblia" para no parecer un turista despistado.
                    </p>
                </div>
            </div>

            <div className="manual-layout manual-container">
                
                {/* SIDEBAR NAVEGACIÓN */}
                <aside className="manual-sidebar">
                    <nav className="sidebar-menu">
                        <button 
                            className={`sidebar-link ${activeSection === 'preparativos' ? 'active' : ''}`}
                            onClick={() => scrollToSection('preparativos')}
                        >
                            01. Preparativos
                        </button>
                        <button 
                            className={`sidebar-link ${activeSection === 'transporte' ? 'active' : ''}`}
                            onClick={() => scrollToSection('transporte')}
                        >
                            02. Moverse
                        </button>
                        <button 
                            className={`sidebar-link ${activeSection === 'dinero' ? 'active' : ''}`}
                            onClick={() => scrollToSection('dinero')}
                        >
                            03. Dinero
                        </button>
                        <button 
                            className={`sidebar-link ${activeSection === 'etiqueta' ? 'active' : ''}`}
                            onClick={() => scrollToSection('etiqueta')}
                        >
                            04. Etiqueta (Do's & Don'ts)
                        </button>
                    </nav>

                    {/* Widget Flotante de Ayuda */}
                    <div className="help-widget">
                        <Zap size={20} className="widget-icon"/>
                        <h4>¿Duda rápida?</h4>
                        <p>Nuestro equipo responde en WhatsApp.</p>
                        <button className="btn-widget">Chat Soporte</button>
                    </div>
                </aside>

                {/* CONTENIDO PRINCIPAL */}
                <main className="manual-content">

                    {/* SECCIÓN 1: PREPARATIVOS */}
                    <section id="preparativos" className="manual-section">
                        <div className="section-header-box">
                            <h2>01. Antes de Volar</h2>
                            <p>Lo que debes tener listo sí o sí antes de subir al avión.</p>
                        </div>

                        <div className="tips-list">
                            <div className="tip-item">
                                <div className="tip-icon bg-blue"><ShieldCheck size={24} /></div>
                                <div className="tip-text">
                                    <h3>Seguro de Viaje</h3>
                                    <p>La sanidad en Japón es excelente pero carísima para extranjeros. 
                                    Nunca viajes sin cobertura médica de al menos 50.000 USD.</p>
                                </div>
                            </div>
                            <div className="tip-item">
                                <div className="tip-icon bg-purple"><Smartphone size={24} /></div>
                                <div className="tip-text">
                                    <h3>Internet (Vital)</h3>
                                    <p>El WiFi público es escaso y malo. Reserva un <strong>Pocket WiFi</strong> (si son varios) 
                                    o una <strong>eSIM</strong> (si vas solo) antes de llegar.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pro-tip-box">
                            <span className="pro-label">PRO TIP</span>
                            <p>
                                Descarga el mapa de Japón en Google Maps para usarlo "Offline" y la app <strong>Google Translate</strong> 
                                con el paquete de japonés descargado. Te salvará la vida al leer menús.
                            </p>
                        </div>
                    </section>

                    <hr className="section-divider"/>

                    {/* SECCIÓN 2: TRANSPORTE */}
                    <section id="transporte" className="manual-section">
                        <div className="section-header-box">
                            <h2>02. Dominando el Transporte</h2>
                        </div>
                        
                        <div className="feature-grid">
                            <div className="feature-card">
                                <Train size={32} className="feature-icon" />
                                <h3>JR Pass</h3>
                                <p>Solo rentable si haces viajes largos en tren bala (ej. Tokio ↔ Kioto) en 7 días. Si te quedas solo en Tokio, NO lo compres.</p>
                            </div>
                            <div className="feature-card">
                                <CreditCard size={32} className="feature-icon" />
                                <h3>Suica / Pasmo</h3>
                                <p>Tarjetas recargables para metro y bus. Indispensables. Cómprala en las máquinas de cualquier estación al llegar.</p>
                            </div>
                        </div>
                    </section>

                    <hr className="section-divider"/>

                    {/* SECCIÓN 3: DINERO */}
                    <section id="dinero" className="manual-section">
                        <div className="section-header-box">
                            <h2>03. Cash vs Tarjeta</h2>
                        </div>
                        <p className="intro-text">
                            Japón sigue siendo una sociedad basada en el efectivo (Cash is King), aunque esto está cambiando rápidamente.
                        </p>
                        <ul className="custom-list">
                            <li><strong>7-Eleven ATM:</strong> El mejor amigo del turista. Aceptan tarjetas extranjeras 24/7 y tienen buenas tasas.</li>
                            <li><strong>Monedas:</strong> Acumularás muchas. Compra un monedero pequeño o úsalas para recargar tu tarjeta Suica.</li>
                            <li><strong>No se da propina:</strong> Nunca. Es considerado mala educación e incluso un insulto. Paga exactamente lo que dice la cuenta.</li>
                        </ul>
                    </section>

                    <hr className="section-divider"/>

                    {/* SECCIÓN 4: ETIQUETA (DO's & DON'Ts) */}
                    <section id="etiqueta" className="manual-section">
                        <div className="section-header-box">
                            <h2>04. Etiqueta Cultural</h2>
                        </div>

                        <div className="dos-donts-grid">
                            {/* COLUMNA SI */}
                            <div className="col-dos">
                                <h3 className="col-title good"><Check size={20}/> SE HACE (Do's)</h3>
                                <div className="rule-card good">
                                    <strong>Quítate los zapatos</strong>
                                    <p>En casas, templos, ryokans y probadores de ropa.</p>
                                </div>
                                <div className="rule-card good">
                                    <strong>Sorber los fideos</strong>
                                    <p>Indica que está delicioso y enfría la sopa.</p>
                                </div>
                                <div className="rule-card good">
                                    <strong>Hacer fila para todo</strong>
                                    <p>Respeta el orden escrupulosamente en el tren.</p>
                                </div>
                            </div>

                            {/* COLUMNA NO */}
                            <div className="col-donts">
                                <h3 className="col-title bad"><X size={20}/> NO SE HACE (Don'ts)</h3>
                                <div className="rule-card bad">
                                    <strong>Comer caminando</strong>
                                    <p>Es de mala educación. Come junto a la tienda o máquina.</p>
                                </div>
                                <div className="rule-card bad">
                                    <strong>Hablar alto en el tren</strong>
                                    <p>El vagón es sagrado. Silencio absoluto.</p>
                                </div>
                                <div className="rule-card bad">
                                    <strong>Clavar los palillos</strong>
                                    <p>En el arroz. Recuerda a rituales funerarios.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                </main>
            </div>
        </div>
    );
};