import { createContext } from "react";
import { useState, useContext } from "react";

const CartContext = createContext()

export const CardProvider = ({ children }) => {

    const [travelSelected, setTravelSelected] = useState(0);

    const viajeSeleccionado = ( idTravel ) => {
        setTravelSelected(idTravel)
    }



    return (
        <CartContext.Provider value={{
            viajeSeleccionado,
            travelSelected
        }}>
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);

