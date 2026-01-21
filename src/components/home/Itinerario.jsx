
import '../../assets/styles/home/Itinerario.css'
import { Card } from './Card.jsx';
import { useEffect, useState } from 'react';
import { getAllTours } from '../../services/Catalog.js'


export const Itinerario = () => {

    const [tours, setTours] = useState([])

    const fetchTours = async () => {
        const data = await getAllTours();
        setTours(data)
    }
    useEffect(() => {
        fetchTours();
    },[])

    const tour = {
        "id_tour": 1,
        "num_tour": 123123,
        "title": "Tokio Viaje 12 dias/11 noches",
        "image_card": "https://res.cloudinary.com/dwxz0svlf/image/upload/v1766856600/tokio_tkphlx.png",
        "destination": "Japón",
        "description": "Descubre la vibrante capital donde el futuro se encuentra con la tradición. Desde los neones de Shinjuku hasta la paz del santuario Meiji, Tokio te ofrece una experiencia sensorial única: gastronomía de clase mundial, moda de vanguardia y templos antiguos que resisten el paso del tiempo.",
        "route": "Tokio, Kioto, Osaka",
        "duration": "12 Día / 11 Noche",
        "price": 5990,
        "rating": 5,
        "galeries": []
    }

    return (
        <div>
            <div className='grid-cards'>
                {tours.map(t => (
                    <Card key={t.id_tour} tour={t}/>
                ))}
                    {/* <Card tour={tour}/> */}
            </div>
        </div>
    )
}