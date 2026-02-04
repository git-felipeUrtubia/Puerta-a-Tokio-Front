import React, { useState, useEffect } from 'react';
import { FileText, Map, Image, Info, MessageSquare } from 'lucide-react';
import '../../assets/styles/home/SectionNav.css';

export const SectionNav = () => {
    const [activeTab, setActiveTab] = useState('resumen');
    const [isSticky, setIsSticky] = useState(false);

    // Detectar scroll para efecto "Sticky"
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 400) { // Ajusta este valor según la altura de tu Hero Image
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Función para scroll suave a la sección
    const scrollToSection = (id) => {
        setActiveTab(id);
        const element = document.getElementById(id);
        if (element) {
            // Ajuste de -80px para que la barra sticky no tape el título
            const y = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const tabs = [
        { id: 'section-resumen', label: 'Resumen', icon: <FileText size={18} /> },
        { id: 'section-itinerario', label: 'Itinerario', icon: <Map size={18} /> },
        { id: 'section-galeria', label: 'Galería', icon: <Image size={18} /> },
        { id: 'section-information', label: 'Información', icon: <Info size={18} /> },
        { id: 'section-comentarios', label: 'Comentarios', icon: <MessageSquare size={18} /> }
    ];

    return (
        <nav className={`tour-nav-container ${isSticky ? 'sticky' : ''}`}>
            <div className="tour-nav-content">
                <ul className="tour-nav-list">
                    {tabs.map((tab) => (
                        <li key={tab.id} className="tour-nav-item">
                            <button
                                className={`tour-nav-btn ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => scrollToSection(tab.id)}
                            >
                                <span className="nav-icon">{tab.icon}</span>
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};