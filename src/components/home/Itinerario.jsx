
import '../../assets/styles/home/Itinerario.css'
import { Card } from './card';
import { getAllTours } from '../../services/getAllTours';
import { useEffect, useState } from 'react';
import { Key } from 'lucide-react';

export const Itinerario = () => {

    const [tours, setTours] = useState([])


    const fetchTours = async () => {
        const data = await getAllTours();
        setTours(data)
    }

    useEffect(() => {
        fetchTours()
    },[])

    return (
        <div>
            <div className='grid-cards'>
                {tours.map(t => (
                    <Card key={t.id} tour={t}/>
                ))}


            </div>
        </div>
    )
}