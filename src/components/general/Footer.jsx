import '../../assets/styles/general/Footer.css'
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Youtube } from 'lucide-react';

export const Footer = () => {


    const IconoX = ({ color = "white", size = 24 }) => (
        <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: color, width: size, height: size }} // Controlas el color aquí
        >
            <title>X</title>
            <path
                fill="#ffff"
                d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"
            />
        </svg>
    );

    return (
        <footer className="footer-container">
            <div className="footer-content">
 
                {/* Columna 1: Marca */}
                <div className="footer-column">
                    <div className="logo-title">
                        <div className="logo-icon"></div>
                        PUERTA A TOKIO
                    </div>
                    <p className="footer-description">
                        Descubre la armoniosa fusión de pasado y presente. Tu socio de confianza para viajes exclusivos y experiencias inolvidables en Japón.
                    </p>
                </div>

                {/* Columna 2: Navegación */}
                <div className="footer-column">
                    <h4 className="column-title">Explorar</h4>
                    <ul className="footer-links">
                        <li><a href="#destinos" className="footer-link">Destinos</a></li>
                        <li><a href="#experiencias" className="footer-link">Experiencias</a></li>
                        <li><a href="#nosotros" className="footer-link">Sobre Nosotros</a></li>
                        <li><a href="#blog" className="footer-link">Blog de Viajes</a></li>
                    </ul>
                </div>

                {/* Columna 3: Contacto */}
                <div className="footer-column">
                    <h4 className="column-title">Contacto</h4>
                    <div className="contact-row">
                        <span className="contact-icon">📍</span>
                        <span>Av. Santiago, Región Metropolitana</span>
                    </div>
                    <div className="contact-row">
                        <span className="contact-icon">📧</span>
                        <span>info@puertaatokio.travel</span>
                    </div>
                    <div className="contact-row">
                        <span className="contact-icon">📞</span>
                        <span>+56 9 1234 5678</span>
                    </div>
                </div>

                {/* Columna 4: Newsletter */}
                <div className="footer-column">
                    <h4 className="column-title">Suscríbete</h4>
                    <p className="footer-description" style={{ marginBottom: '15px' }}>
                        Recibe ofertas exclusivas y guías de viaje.
                    </p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Tu correo electrónico"
                            className="newsletter-input"
                        />
                        <button className="newsletter-button">
                            SUSCRIBIRSE
                        </button>
                    </form>

                    <div className="social-icons">
                        {/* Aquí puedes reemplazar 'IG' con iconos reales como <FaInstagram /> si instalas react-icons */}
                        <a href="#ig" className="social-icon"><Instagram /></a>
                        <a href="#fb" className="social-icon"><Facebook /></a>
                        <a href="#x" className="social-icon"><IconoX color="white" size={20} /></a>
                        <a href="#yt" className="social-icon"><Youtube /></a>
                    </div>
                </div>
            </div>

            {/* Barra Copyright */}
            <div className="copyright-bar">
                <div>
                    © {new Date().getFullYear()} Puerta a Tokio. Todos los derechos reservados.
                </div>
                <div className="legal-links">
                    <a href="#privacy" className="footer-link">Privacidad</a>
                    <a href="#terms" className="footer-link">Términos</a>
                </div>
            </div>
        </footer>
    );
};

