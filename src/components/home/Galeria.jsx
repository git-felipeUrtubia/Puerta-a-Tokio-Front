
import '../../assets/styles/home/Galeria.css'; // Asegúrate de que la ruta sea correcta

export const Galeria = ({ galerys }) => {

    if (!galerys || galerys.length === 0) {
        return <p className="text-center">No hay imágenes para mostrar.</p>;
    }

    console.log("IMAGENES: ", galerys)

    return (
        <div>
            <div className='title'>
                <span>Gal</span>
                <span>ería</span>
            </div>
            <div className='grid'>
                <div className="galeria-grid">
                    {galerys.map((img, index) => (
                        <div key={index} className="galeria-item">
                            <img
                                src={img.image}
                                alt={`Imagen ${index}`}
                                className="galeria-img"
                                loading="lazy"
                            />
                            <div className='slide-details'>
                                <h1>{img.name}</h1>
                                <p>{img.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


