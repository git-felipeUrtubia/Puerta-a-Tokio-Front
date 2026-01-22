import React, { useState } from 'react';
import { RegisterUser } from '../../services/Auth.js';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Asumiendo que usas react-router
import '../../assets/styles/home/Register.css';
import logo from '../../../public/logo.png'; // Ajusta la ruta a tu logo

export const Register = () => {

    const nav = useNavigate()

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: "",
        username: '',
        password: '',
        confirmPassword: '',
        termsAccepted: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const fetchRegisterUser = async (formData) => {
        let res = await RegisterUser(formData);
        return res;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación simple de contraseñas
        if (formData.password !== formData.confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        if (!formData.termsAccepted) {
            alert("Por favor, acepta los términos y condiciones.");
            return;
        }

        console.log('Datos de registro:', formData);
        
        let status = await fetchRegisterUser(formData); 

        if(status == 200) {
            alert("Usuario Guardado con exito!");
            nav("/home/login");
            return;
        }

        alert(`Error usuario no a sido guardado, STATUS: ${status}`)

    };

    return (
        <div className="register-container">
            <div className="register-card">

                {/* Cabecera del Registro */}
                <div className="register-header">
                    <Link to="/home">
                        <img src={logo} alt="Puerta a Tokio" className="register-logo" />
                    </Link>
                    <h2>Crea tu cuenta</h2>
                    <p>Únete para planificar tu viaje soñado a Japón</p>
                </div>

                <form onSubmit={handleSubmit} className="register-form">

                    {/* Nombre y Apellido */}
                    <div className="form-group">
                        <label htmlFor="fullName">Nombre</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Ej. Juan"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="fullName">Apellido Paterno</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Ej. Pérez"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Correo */}
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

                    {/* Contraseñas (en fila para desktop) */}
                    <div className="form-row">
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
                                minLength="6"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="••••••••"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Términos */}
                    <div className="form-options">
                        <label className="checkbox-container">
                            <input
                                type="checkbox"
                                name="termsAccepted"
                                checked={formData.termsAccepted}
                                onChange={handleChange}
                            />
                            <span className="checkmark"></span>
                            Acepto los <a href="#">Términos</a> y la <a href="#">Política de Privacidad</a>
                        </label>
                    </div>

                    {/* Botón de Acción */}
                    <button type="submit" className="btn-register">
                        Registrarse
                    </button>
                </form>

                {/* Footer del registro */}
                <div className="register-footer">
                    <p>¿Ya tienes una cuenta? <Link to="/home/login">Inicia Sesión aquí</Link></p>
                </div>
            </div>
        </div>
    );
};