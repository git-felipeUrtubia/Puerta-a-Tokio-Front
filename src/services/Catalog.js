
import axios from "axios";


export const getAllTours = async () => {

    try {
        const res = await axios.get('http://localhost:8080/catalog/tour/find-all')
        return res.data
    } catch (error) {
        console.log(error)
    }

}



