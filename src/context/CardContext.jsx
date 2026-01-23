import { createContext } from "react";
import { useState, useContext } from "react";

const CartContext = createContext()

export const CardProvider = ({ children }) => {

    const [travelSelected, setTravelSelected] = useState(0);
    const [travelToPay, setTravelToPay] = useState(null)

    const viajeSeleccionado = ( idTravel ) => {
        setTravelSelected(idTravel)
    }

    const addTravelToPay = (travel) => {
        setTravelToPay(travel)
    }

    return (
        <CartContext.Provider value={{
            viajeSeleccionado,
            travelSelected,
            addTravelToPay,
            travelToPay
        }}>
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);

