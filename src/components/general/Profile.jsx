import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Map, LogOut, Mail, Phone, Calendar, MapPin, Edit2, Save } from 'lucide-react';
import '../../assets/styles/general/Profile.css';

export const Profile = () => {
    const nav = useNavigate();
    const [activeTab, setActiveTab] = useState('personal'); // 'personal' o 'trips'

    // Simulación de datos de usuario (Cargar desde localStorage o API real)
    const [userData, setUserData] = useState({
        firstName: 'Felipe',
        lastName: 'Urtubia',
        email: 'felipe@example.com',
        phone: '+56 9 1234 5678',
        nationality: 'Chilena'
    });

    const [isEditing, setIsEditing] = useState(false);

    // Simulación de historial de viajes
    const myTrips = [
        {
            id: 101,
            title: "Tokio Viaje 12 días/11 noches",
            date: "15 Mar 2026",
            status: "Confirmado",
            price: 6110,
            image: "https://res.cloudinary.com/dwxz0svlf/image/upload/v1766856600/tokio_tkphlx.png",
            passengers: 2
        },
        {
            id: 102,
            title: "Escapada a Kioto",
            date: "10 Nov 2025",
            status: "Completado",
            price: 3200,
            image: "https://res.cloudinary.com/dwxz0svlf/image/upload/v1766940448/kyushu_tringf.jpg",
            passengers: 1
        },
        {
            id: 103,
            title: "Escapada a Kioto",
            date: "10 Nov 2025",
            status: "Completado",
            price: 3200,
            image: "https://res.cloudinary.com/dwxz0svlf/image/upload/v1766940448/kyushu_tringf.jpg",
            passengers: 1
        },
        {
            id: 104,
            title: "Escapada a Kioto",
            date: "10 Nov 2025",
            status: "Completado",
            price: 3200,
            image: "https://res.cloudinary.com/dwxz0svlf/image/upload/v1766940448/kyushu_tringf.jpg",
            passengers: 1
        }
    ];

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        nav('/home');
        window.location.reload(); // Para refrescar el estado del NavBar
    };

    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    return (
        <div className="profile-wrapper">
            <div className="profile-container">

                {/* --- SIDEBAR --- */}
                <aside className="profile-sidebar">
                    <div className="sidebar-header">
                        <div className="profile-avatar-large">
                            {userData.firstName.charAt(0)}
                        </div>
                        <h3>{userData.firstName} {userData.lastName}</h3>
                        <span className="user-role">Viajero Frecuente</span>
                    </div>

                    <nav className="sidebar-nav">
                        <button
                            className={`nav-btn ${activeTab === 'personal' ? 'active' : ''}`}
                            onClick={() => setActiveTab('personal')}
                        >
                            <User size={18} /> Datos Personales
                        </button>
                        <button
                            className={`nav-btn ${activeTab === 'trips' ? 'active' : ''}`}
                            onClick={() => setActiveTab('trips')}
                        >
                            <Map size={18} /> Mis Viajes
                        </button>
                        <div className="separator-nav"></div>
                        <button className="nav-btn logout" onClick={handleLogout}>
                            <LogOut size={18} /> Cerrar Sesión
                        </button>
                    </nav>
                </aside>

                {/* --- CONTENIDO PRINCIPAL --- */}
                <main className="profile-content">

                    {/* SECCIÓN: DATOS PERSONALES */}
                    {activeTab === 'personal' && (
                        <div className="content-section fade-in">
                            <div className="section-header">
                                <h2>Información Personal</h2>
                                <button
                                    className="btn-edit"
                                    onClick={() => setIsEditing(!isEditing)}
                                >
                                    {isEditing ? <><Save size={16} /> Guardar</> : <><Edit2 size={16} /> Editar</>}
                                </button>
                            </div>

                            <form className="profile-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Nombre</label>
                                        <div className="input-wrapper">
                                            <User size={18} className="input-icon" />
                                            <input
                                                type="text" name="firstName"
                                                value={userData.firstName}
                                                disabled={!isEditing}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Apellido</label>
                                        <div className="input-wrapper">
                                            <User size={18} className="input-icon" />
                                            <input
                                                type="text" name="lastName"
                                                value={userData.lastName}
                                                disabled={!isEditing}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Correo Electrónico</label>
                                        <div className="input-wrapper">
                                            <Mail size={18} className="input-icon" />
                                            <input
                                                type="email" name="email"
                                                value={userData.email}
                                                disabled={true} // El email suele ser único
                                                className="disabled-input"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Teléfono</label>
                                        <div className="input-wrapper">
                                            <Phone size={18} className="input-icon" />
                                            <input
                                                type="text" name="phone"
                                                value={userData.phone}
                                                disabled={!isEditing}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* SECCIÓN: MIS VIAJES */}
                    {activeTab === 'trips' && (
                        <div className="content-section fade-in">
                            <div className="section-header">
                                <h2>Mis Reservas</h2>
                            </div>

                            <div className="trips-list">
                                {myTrips.map(trip => (
                                    <div key={trip.id} className="trip-card">
                                        <img src={trip.image} alt={trip.title} className="trip-img" />

                                        <div className="trip-details">
                                            <div className="trip-header">
                                                <h4>{trip.title}</h4>
                                                <span className={`status-badge ${trip.status.toLowerCase()}`}>
                                                    {trip.status}
                                                </span>
                                            </div>

                                            <div className="trip-meta">
                                                <span><Calendar size={14} /> {trip.date}</span>
                                                <span><MapPin size={14} /> Japón</span>
                                                <span><User size={14} /> {trip.passengers} Pasajeros</span>
                                            </div>

                                            <div className="trip-footer">
                                                <span className="trip-price">Total: ${trip.price} USD</span>
                                                <button className="btn-details">Ver Detalles</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </main>
            </div>
        </div>
    );
};