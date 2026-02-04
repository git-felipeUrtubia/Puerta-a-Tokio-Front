
import axios from "axios";

// const API_URL = import.meta.env.VITE_API_URL;


export const RegisterUser = async (formData) => {

    let request = {
        "username": formData.username,
        "password": formData.password,
        "firstName": formData.firstName,
        "lastName": formData.lastName
    }

    const res = await axios.post(`http://localhost:8080/auth/register`, request);
    
    return res.status;
}

export const LoginUser = async (formData) => {

    let request = {
        "username": formData.username,
        "password": formData.password
    }

    const res = await axios.post(`http://localhost:8080/auth/login`, request);
    
    return res.data;

}
