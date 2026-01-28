
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;


export const RegisterUser = async (formData) => {

    let request = {
        "username": formData.username,
        "password": formData.password,
        "firstName": formData.firstName,
        "lastName": formData.lastName
    }

    const res = await axios.post(`${API_URL}/auth/register`, request);
    
    return res.status;
}

export const LoginUser = async (formData) => {

    let request = {
        "username": formData.username,
        "password": formData.password
    }

    const res = await axios.post(`${API_URL}/auth/login`, request);
    
    return res.data;

}
