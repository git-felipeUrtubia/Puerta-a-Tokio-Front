
import axios from "axios";

// const API_URL = import.meta.env.VITE_API_URL;


export const saveComment = async (formData) => {

    let data = JSON.parse(localStorage.getItem("token"));


    let request = {
        comment: formData.comment,
        rating: formData.rating,
        dateCreatedAt: new Date().toLocaleDateString('es-CL').replace(/\//g, '-'),
        timeCreatedAt: new Date().toLocaleTimeString('es-CL', { hour12: false }),
        userID: data.userID
    }

    // console.log("REQUEST: ", request)

    const res = await axios.post(`http://localhost:8080/comment/save-comment`, request)

    return res.data;
}

export const getAllComments = async () => {


    let data = JSON.parse(localStorage.getItem("token"));

    const res = await axios.get(`http://localhost:8080/comment/find-all`, {
        headers: {
            'Authorization': `Bearer ${data.jwt}`
        }
    })


    return res.data;
}


