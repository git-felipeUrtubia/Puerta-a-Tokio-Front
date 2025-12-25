import '../../assets/styles/home/Home.css'
import presentation from '../../../public/presentation.png'
import timbre from '../../../public/timbre.png'
import { SectionNav } from './SectionNav.jsx'
import { Resumen } from './Resumen.jsx'
import { Itinerario } from './Itinerario.jsx'
import { Galeria } from './Galeria.jsx'

import kanto from '../../../public/img/kanto.jpg'
import tokio from '../../../public/img/tokio.jpg'
import okkinawa from '../../../public/img/okkinawa.jpg'
import kyushu from '../../../public/img/kyushu.jpg'
import hokkaido from '../../../public/img/hokkaido.jpg'
import festival_nieve_sapporo from '../../../public/img/festival_nieve_sapporo.jpg'



export const Home = () => {

    const images = [
        { src: kanto, alt: "Calle de Akihabara" },
        { src: tokio, alt: "Cruce de Shibuya" },
        { src: okkinawa, alt: "Cruce de Shibuya" },
        { src: kyushu, alt: "Cruce de Shibuya" },
        { src: hokkaido, alt: "Cruce de Shibuya" },
        { src: festival_nieve_sapporo, alt: "Cruce de Shibuya" }

    ];

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
            <hr class="separador"></hr>
            <Itinerario />
            <hr class="separador"></hr>
            <Galeria imagenes={images}/>
            <hr class="separador"></hr>

        </div>
    )
}
