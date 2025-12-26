
import { Stars } from "./Stars";
import { useCart } from "../../context/CardContext";
import { useNavigate } from "react-router-dom";
import '../../assets/styles/home/Card.css'



export const Card = ({ tour }) => {
    const {id, image, title, destinations, description, route, duration, price, rating } = tour;
    const { viajeSeleccionado } = useCart()
    const nav = useNavigate()

    return (
        <div className="card">
            <div className="image-container">
                <img className="card-image" src={image} alt={title} />
                {/* La duración ahora está sobre la imagen, igual que tu diseño */}
                <span className="duration-badge">{duration}</span>
            </div>

            <div className="card-content">
                <h3 className="card-title">{title}</h3>

                <div className="route-info">
                    <span className="country-highlight">{destinations}</span>
                </div>

                <p className="route-cities">{route}</p>

                <div className="card-footer">
                    <div className="price-container">
                        <span className="price-label">Desde</span>
                        <span className="price-value">{price}</span>
                    </div>

                    <div className="content-btn-details">
                        <Stars rating={rating} />
                        <button className="details-link" onClick={() => {
                            viajeSeleccionado(id)
                            nav('/home/travel-details')
                        }}>
                            <span>Detalle</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};