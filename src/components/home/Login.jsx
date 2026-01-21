import React, { useState } from 'react';
import '../../assets/styles/home/Login.css'; // Importamos los estilos
import logo from '../../../public/logo.png'; // Asegúrate de poner la ruta correcta a tu logo

export const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos de login:', formData);
        // Aquí iría tu lógica de autenticación
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    {/* Si tienes el logo importado, úsalo aquí. Si no, usa el texto */}
                    <img src={logo} alt="Puerta a Tokio" className="login-logo" />
                    <h2>Bienvenido de nuevo</h2>
                    <p>Ingresa a tu cuenta para gestionar tus viajes</p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="ejemplo@correo.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-options">
                        <label className="checkbox-container">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            Recordarme
                        </label>
                        <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
                    </div>

                    <button type="submit" className="btn-login">
                        Iniciar Sesión
                    </button>
                </form>

                <div className="login-footer">
                    <p>¿Aún no tienes cuenta? <a href="#">Regístrate aquí</a></p>
                </div>
            </div>
        </div>
    );
};