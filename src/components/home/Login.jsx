import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginUser } from '../../services/Auth.js';
import '../../assets/styles/home/Login.css'; // Importamos los estilos
import logo from '../../../public/logo.png'; // Asegúrate de poner la ruta correcta a tu logo

export const Login = () => {

    const nav = useNavigate()

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let data = await LoginUser(formData);

            alert("Logueado con exito!");

            localStorage.setItem('token', JSON.stringify(data))

            nav("/home");
            return;
        } catch (error) {
            alert(`Usuario y/o contraseña incorrectos, ${error}`)

        }

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
                            id="username"
                            name="username"
                            placeholder="ejemplo@correo.com"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="text"
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
                    <p>¿Aún no tienes cuenta? <button onClick={() => nav("/home/register")}>Regístrate aquí</button></p>
                </div>
            </div>
        </div>
    );
};