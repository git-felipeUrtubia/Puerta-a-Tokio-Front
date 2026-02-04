
import axios from "axios";


export const getAllTours = async () => {

    // const API_URL = import.meta.env.VITE_API_URL;

    try {
        const res = await axios.get(`http://localhost:8080/catalog/tour/find-all`)
        return res.data
    } catch (error) {
        console.log(error)
    }

}

export const getAllInfo = async () => {
    try {
        const res = await axios.get('http://localhost:8080/catalog/info/find-all')
        return res.data
    } catch (error) {
        console.log(error)
    }
}



