
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;


export const RegisterUser = async (formData) => {

    let request = {
        "username": formData.username,
        "password": formData.password,
        "firstName": formData.firstName,
        "lastName": formData.lastName
    }

    const res = await axios.post(`https://backend-puerta-a-tokio-production.up.railway.app/auth/register`, request);
    
    return res.status;
}

export const LoginUser = async (formData) => {

    let request = {
        "username": formData.username,
        "password": formData.password
    }

    const res = await axios.post(`https://backend-puerta-a-tokio-production.up.railway.app/auth/login`, request);
    
    return res.data;

}
