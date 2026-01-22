
import axios from "axios";

export const RegisterUser = async (formData) => {

    let request = {
        "username": formData.username,
        "password": formData.password,
        "firstName": formData.firstName,
        "lastName": formData.lastName
    }

    const res = await axios.post('http://localhost:8080/auth/register', request);
    
    return res.status;
}

export const LoginUser = async (formData) => {

    let request = {
        "username": formData.username,
        "password": formData.password
    }

    const res = await axios.post('http://localhost:8080/auth/login', request);
    
    return res;

}
