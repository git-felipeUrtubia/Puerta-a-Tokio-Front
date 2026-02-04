import '../../assets/styles/home/Home.css'
import { useState, useEffect } from 'react'
import presentation from '../../../public/presentation.png'
import timbre from '../../../public/timbre.png'
import { SectionNav } from './SectionNav.jsx'
import { Resumen } from './Resumen.jsx'
import { Itinerario } from './Itinerario.jsx'
import { Galeria } from './Galeria.jsx'
import { Information } from './Information.jsx'
import { Comments } from './Comments.jsx'


export const Home = () => {

    const [galerys, setGalerys] = useState([])

    useEffect(() => {
        setGalerys([
            {
                name: "Tokio",
                description: "Tokio es una metrópoli fascinante donde los rascacielos futuristas y la tecnología de punta conviven en perfecta armonía con templos antiguos y tradiciones centenarias. Es una ciudad de contrastes, dividida en barrios con personalidades muy marcadas.",
                image: "https://res.cloudinary.com/dwxz0svlf/image/upload/v1766940460/tokio_wtaxfi.jpg"
            },
            {
                name: "Okkinawa",
                description: "Tokio es una metrópoli fascinante donde los rascacielos futuristas y la tecnología de punta conviven en perfecta armonía con templos antiguos y tradiciones centenarias. Es una ciudad de contrastes, dividida en barrios con personalidades muy marcadas.",
                image: "https://res.cloudinary.com/dwxz0svlf/image/upload/v1766940453/okkinawa_xcc3xr.jpg"
            },
            {
                name: "Kyushu",
                description: "Tokio es una metrópoli fascinante donde los rascacielos futuristas y la tecnología de punta conviven en perfecta armonía con templos antiguos y tradiciones centenarias. Es una ciudad de contrastes, dividida en barrios con personalidades muy marcadas.",
                image: "https://res.cloudinary.com/dwxz0svlf/image/upload/v1766940448/kyushu_tringf.jpg"
            },
            {
                name: "Kanto",
                description: "Tokio es una metrópoli fascinante donde los rascacielos futuristas y la tecnología de punta conviven en perfecta armonía con templos antiguos y tradiciones centenarias. Es una ciudad de contrastes, dividida en barrios con personalidades muy marcadas.",
                image: "https://res.cloudinary.com/dwxz0svlf/image/upload/v1766940443/kanto_ceb3pg.jpg"
            },
            {
                name: "Hokkaido",
                description: "Tokio es una metrópoli fascinante donde los rascacielos futuristas y la tecnología de punta conviven en perfecta armonía con templos antiguos y tradiciones centenarias. Es una ciudad de contrastes, dividida en barrios con personalidades muy marcadas.",
                image: "https://res.cloudinary.com/dwxz0svlf/image/upload/v1766940439/hokkaido_bdz78x.jpg"
            },
            {
                name: "Festibal Nieve Sapporo",
                description: "Tokio es una metrópoli fascinante donde los rascacielos futuristas y la tecnología de punta conviven en perfecta armonía con templos antiguos y tradiciones centenarias. Es una ciudad de contrastes, dividida en barrios con personalidades muy marcadas.",
                image: "https://res.cloudinary.com/dwxz0svlf/image/upload/v1766940416/festival_nieve_sapporo_z6sujb.jpg"
            },

        ])
    }, [])

    const isSession = () => {
        let token = JSON.parse(localStorage.getItem('token') || null);
        return token != null;
    }


    return (
        <div>
            <div className="presentation">
                <img src={presentation} alt="presentation" />
                <div className='timbre'>
                    <img src={timbre} alt="timbre" />
                </div>
            </div>
            <SectionNav />
            <Resumen />
            <hr className="separador"></hr>
            <Itinerario />
            <hr className="separador"></hr>
            <Galeria galerys={galerys} />
            <hr className="separador-info"></hr>
            <Information />
            <hr className="separador-comments"></hr>
            { isSession() ? <Comments /> : ''}

        </div>
    )
}


