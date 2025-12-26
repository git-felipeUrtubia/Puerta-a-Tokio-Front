
import '../../assets/styles/home/Resumen.css'
import map from '../../../public/map_turistik.png'


export const Resumen = () => {
    return (
        <div className='content-resumen'>
            <div className='content-text-resumen'>
                <p>
                    <i>
                        Descubra la exuberante belleza y la profunda tradición cultural de Japón, un país que cautiva por su armoniosa fusión de pasado y presente. De Tokio a Kioto y Osaka, cada ciudad ofrece una perspectiva única de la cultura japonesa. Los japoneses son conocidos por su cálida hospitalidad y la meticulosidad que impregna su arte, como la ceremonia del té, los jardines zen y la precisión de los trenes bala. La cocina japonesa es un auténtico festín de sabores y colores, con platos como el sushi, el sashimi y el ramen que conquistan paladares en todo el mundo. Japón es también un paraíso para los entusiastas de la tecnología, con sus rascacielos futuristas y sus innovadores artilugios. Ya sea explorando las bulliciosas calles de Tokio o relajándose en un onsen tradicional en las montañas, cada momento pasado en Japón es una oportunidad para descubrir el equilibrio perfecto entre modernidad y tradición, entre lo efímero y lo eterno. Prepárese para dejarse hechizar por la magia y la diversidad de Japón, donde cada visita es un viaje para los sentidos y el alma.
                    </i>
                </p>
                <div className='grid-text'>

                    <span>Capital:</span>
                    <span>Tokio:</span>

                    <span>Idioma principal::</span>
                    <span>Japonés:</span>

                    <span>Población:</span>
                    <span>123.97 millones (2024):</span>

                    <span>Monedas Populares:</span>
                    <span>Yen (JPY):</span>

                    <span>Zona horaria:</span>
                    <span>UTC+9:</span>

                    <span>Prefijo telefonico:</span>
                    <span>+81:</span>


                </div>
            </div>
            <div className='content-map'>
                <img src={map} alt="img-map" />
            </div>
        </div>
    )
}