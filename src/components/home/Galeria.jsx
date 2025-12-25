
import '../../assets/styles/home/Galeria.css'; // Asegúrate de que la ruta sea correcta

export const Galeria = ({ imagenes }) => {

    if (!imagenes || imagenes.length === 0) {
        return <p className="text-center">No hay imágenes para mostrar.</p>;
    }

    return (
        <div>
            <div className='title'>
                <span>Gal</span>
                <span>ería</span>
            </div>
            <div className='grid'>
                <div className="galeria-grid">
                    {imagenes.map((img, index) => (
                        <div key={index} className="galeria-item">
                            <img
                                src={img.src}
                                alt={img.alt || `Imagen ${index}`}
                                className="galeria-img"
                                loading="lazy" // Mejora el rendimiento cargando solo al hacer scroll
                            />
                            <div className='slide-details'>
                                <h1>titulo</h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet dolorum neque omnis voluptates perferendis? Voluptate blanditiis dicta id! Soluta cum architecto nesciunt odio amet unde iure iste facere beatae repellat?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet dolorum neque omnis voluptates perferendis? Voluptate blanditiis dicta id! Soluta cum architecto nesciunt odio amet unde iure iste facere beatae repellat?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet dolorum neque omnis voluptates perferendis?</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


