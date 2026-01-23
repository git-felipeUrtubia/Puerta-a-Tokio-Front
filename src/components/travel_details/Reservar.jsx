import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Calendar, Lock, User, ShieldCheck, ArrowLeft, Minus, Plus } from 'lucide-react'; // Importamos iconos extra
import { useCart } from '../../context/CardContext';
import { AuthRequiredException } from '../exception/AuthRequiredException.jsx';
import '../../assets/styles/travel_details/Reservar.css';

export const Reservar = () => {
    const nav = useNavigate();
    const { travelToPay } = useCart();
    const data = JSON.parse(localStorage.getItem('token') || null)

    // Estado para la cantidad de personas (Inicia en 1)
    const [people, setPeople] = useState(1);

    const [cardData, setCardData] = useState({
        number: '',
        name: '',
        expiry: '',
        cvc: ''
    });

    const [trip, setTrip] = useState(travelToPay || {
        title: "Viaje Seleccionado",
        route: "",
        price: "0",
        image_card: ""
    });

    const handleCardNumberChange = (e) => {
        const value = e.target.value.replace(/\D/g, '').substring(0, 16);
        const formatted = value.match(/.{1,4}/g)?.join(' ') || value;
        setCardData({ ...cardData, number: formatted });
    };

    const handleChange = (e) => {
        setCardData({ ...cardData, [e.target.name]: e.target.value });
    };

    // Funciones para controlar la cantidad de personas
    const incrementPeople = () => setPeople(prev => prev + 1);
    const decrementPeople = () => setPeople(prev => (prev > 1 ? prev - 1 : 1));

    // Cálculos dinámicos
    const subtotal = Number(trip.price) * people; // Suma del precio base por todos los pasajeros
    const iva = subtotal * 0.19;           // Cálculo del IVA (19% sobre el total base)
    const total = subtotal + iva;

    if (data === null) {
        return (
        <AuthRequiredException />
    )
    }

    

    return (
            <section className="reservar-section">
                <div className="reservar-container">

                    {/* BOTÓN DE REGRESO */}
                    <button className="btn-back" onClick={() => nav(-1)}>
                        <ArrowLeft size={20} />
                        <span>Volver atrás</span>
                    </button>

                    <h2 className="reservar-title">Finalizar Reserva</h2>

                    <div className="reservar-grid">

                        {/* COLUMNA IZQUIERDA: Resumen del Viaje */}
                        <div className="summary-card">
                            <h3 className="card-header-title">Resumen del Viaje</h3>

                            <div className="tour-preview">
                                <img src={trip.image_card} alt={trip.title} className="tour-thumb" />
                                <div className="tour-info">
                                    <h4>{trip.title}</h4>
                                    <p>{trip.route}</p>
                                </div>
                            </div>

                            {/* CONTROL DE PERSONAS */}
                            <div className="people-selector">
                                <span className="people-label">Pasajeros:</span>
                                <div className="counter-wrapper">
                                    <button
                                        type="button"
                                        className="counter-btn"
                                        onClick={decrementPeople}
                                        disabled={people === 1}
                                    >
                                        <Minus size={16} />
                                    </button>
                                    <span className="people-count">{people}</span>
                                    <button
                                        type="button"
                                        className="counter-btn"
                                        onClick={incrementPeople}
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>
                            </div>

                            <div className="price-breakdown">
                                <div className="price-row">
                                    {/* Mostramos el precio unitario y luego el total calculado */}
                                    <span>Precio base (${trip.price} x {people})</span>
                                    <span>$ {subtotal.toLocaleString()}</span>
                                </div>
                                <div className="price-row">
                                    <span>Impuestos y tasas</span>
                                    <span>$ {iva.toLocaleString()} USD</span>
                                </div>
                                <div className="divider"></div>
                                <div className="price-row total">
                                    <span>Total a Pagar</span>
                                    <span className="total-amount">$ {total.toLocaleString()} USD</span>
                                </div>
                            </div>

                            <div className="security-badge">
                                <ShieldCheck size={20} />
                                <p>Tus datos están protegidos con encriptación SSL de 256-bits.</p>
                            </div>
                        </div>

                        {/* COLUMNA DERECHA: Formulario de Pago */}
                        <div className="payment-card">
                            <h3 className="card-header-title">Detalles del Pago</h3>

                            <form className="payment-form" onSubmit={(e) => e.preventDefault()}>

                                <div className="cards-accepted">
                                    <span className="card-brand">Visa</span>
                                    <span className="card-brand">Mastercard</span>
                                    <span className="card-brand">Amex</span>
                                </div>

                                <div className="input-group">
                                    <label>Titular de la Tarjeta</label>
                                    <div className="input-wrapper">
                                        <User className="input-icon" size={18} />
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Como aparece en la tarjeta"
                                            value={cardData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="input-group">
                                    <label>Número de Tarjeta</label>
                                    <div className="input-wrapper">
                                        <CreditCard className="input-icon" size={18} />
                                        <input
                                            type="text"
                                            placeholder="0000 0000 0000 0000"
                                            value={cardData.number}
                                            onChange={handleCardNumberChange}
                                            maxLength="19"
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="input-group">
                                        <label>Expiración (MM/YY)</label>
                                        <div className="input-wrapper">
                                            <Calendar className="input-icon" size={18} />
                                            <input
                                                type="text"
                                                name="expiry"
                                                placeholder="MM/YY"
                                                maxLength="5"
                                                value={cardData.expiry}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="input-group">
                                        <label>CVC / CVV</label>
                                        <div className="input-wrapper">
                                            <Lock className="input-icon" size={18} />
                                            <input
                                                type="password"
                                                name="cvc"
                                                placeholder="123"
                                                maxLength="3"
                                                value={cardData.cvc}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <button className="pay-button">
                                    Pagar $ {total.toLocaleString()} USD
                                </button>

                                <p className="terms-text">
                                    Al hacer clic en "Pagar", aceptas nuestros <a href="#">Términos y Condiciones</a> y la Política de Cancelación.
                                </p>

                            </form>
                        </div>

                    </div>
                </div>
            </section>
        );

};