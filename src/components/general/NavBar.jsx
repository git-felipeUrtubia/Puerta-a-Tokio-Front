import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/general/NavBar.css'
import logo from '../../../public/logo.png'

export const NavBar = () => {
    const nav = useNavigate()

    return (
        <div>

            <div className='nav-bar-lenguage'>
                <ul>
                    <li><a href="#">ESPAÑOL</a></li>
                    <li><a href="#">PORTUGUES</a></li>
                    <li><a href="#">INGLES</a></li>
                </ul>
            </div>
            <div className='nav-bar'>
                <div className='logo' onClick={() => nav('/home')}><img src={logo} alt="logo" /></div>


                <ul id="menu-espanol">
                    <li className='nav-dropdown'>

                        <a href="#"><span className='text-destinos'><span>Destinos</span> <ChevronDown style={{ width: '1rem', height: '1rem' }} /></span></a>

                        <ul id="sub-menu" >

                            <li><a href="#"><span>Tokio y Kanto</span></a></li>
                            <li><a href="#"><span>Kioto y Kansai</span></a></li>
                            <li><a href="#"><span>Hokkaido</span></a></li>
                            <li><a href="#"><span>Islas Okinawa</span></a></li>
                            <li><a href="#"><span>Kyushu</span></a></li>


                        </ul>

                    </li>

                    <li className='nav-dropdown'>

                        <a href="#"><span className='text-destinos'>Experiencias <ChevronDown style={{ width: '1rem', height: '1rem' }} /></span></a>

                        <ul id="sub-menu" >

                            <li><a href="#"><span>Gion Matsuri</span></a></li>
                            <li><a href="#"><span>Kanda Matsuri</span></a></li>
                            <li><a href="#"><span>Festival de la Nieve de Sapporo</span></a></li>
                            <li><a href="#"><span>Santuario Fushimi Inari-taisha</span></a></li>
                            <li><a href="#"><span>Barrio de Gion</span></a></li>
                            <li><a href="#"><span>Itsukushima (Santuario Flotante)</span></a></li>
                            <li><a href="#"><span>Shibuya</span></a></li>

                        </ul>

                    </li>

                    <li className='nav-dropdown'>

                        <a href="#"><span className='text-destinos'>Sobre Nosotros <ChevronDown style={{ width: '1rem', height: '1rem' }} /></span></a>

                        <ul id="sub-menu" >

                            <li><a href="#"><span>Sobre nosotros</span></a></li>
                            <li><a href="#"><span>Inspiración</span></a></li>
                            <li><a href="#"><span>¿Por que Mundo de Japón?</span></a></li>
                            <li><a href="#"><span>Contacto</span></a></li>

                        </ul>

                    </li>

                    <li className='nav-dropdown'>

                        <a href="#"><span className='text-destinos'>Blog <ChevronDown style={{ width: '1rem', height: '1rem' }} /></span></a>

                        <ul id="sub-menu" >

                            <li><a href="#"><span>Tokyo y Ciudades</span></a></li>
                            <li><a href="#"><span>Experiencias Locales</span></a></li>
                            <li><a href="#"><span>Pueblos Magicos</span></a></li>
                            <li><a href="#"><span>Comida Japonesa</span></a></li>

                        </ul>

                    </li>

                </ul>

            </div>
        </div>
    )

}



