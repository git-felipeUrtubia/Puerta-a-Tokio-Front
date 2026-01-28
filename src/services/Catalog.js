
import axios from "axios";


export const getAllTours = async () => {

    const API_URL = import.meta.env.VITE_API_URL;

    try {
        const res = await axios.get(`https://backend-puerta-a-tokio-production.up.railway.app/catalog/tour/find-all/catalog/tour/find-all`)
        return res.data
    } catch (error) {
        console.log(error)
    }

}



