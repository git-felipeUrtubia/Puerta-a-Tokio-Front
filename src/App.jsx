import './assets/styles/general/App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CardProvider } from './context/CardContext.jsx'
import { NavBar } from './components/general/NavBar.jsx'
import { Footer } from './components/general/Footer.jsx'
import { Home } from './components/home/Home.jsx'
import { TravelDetails } from './components/travel_details/TravelDetails.jsx'
import { Login } from './components/home/Login.jsx'
import { Register } from './components/home/Register.jsx'
import { Reservar } from './components/travel_details/Reservar.jsx'
import { CustomItinerary } from './components/Itinerario/CustomItinerary.jsx'
import { Profile } from './components/general/Profile.jsx'
import { Destination } from './components/pages/destinos/Destination.jsx'
import { ErrorView } from './components/exception/ErrorView.jsx'
import { Our } from './components/pages/nosotros/Our.jsx'
import { Blog } from './components/pages/blog/Blog.jsx'
import { Experiences } from './components/pages/experiencias/Experiences.jsx'


export const App = () => {



  return (
    <CardProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path="*" element={<ErrorView title="Página no encontrada" message="Lo sentimos, la ruta que buscas no existe." />} />

          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/travel-details" element={<TravelDetails />} />
          <Route path="/home/login" element={<Login />} />
          <Route path="/home/register" element={<Register />} />
          <Route path="/home/travel-details/pay" element={<Reservar />} />
          <Route path="/home/information/custom-itinerary" element={<CustomItinerary />} />
          <Route path="/home/profile" element={<Profile />} />

          <Route path="/home/destinos/:option" element={<Destination />} />
          <Route path="/home/nosotros/:option" element={<Our />} />
          <Route path="/home/blog/:option" element={<Blog />} />
          <Route path="/home/experiencias/:option" element={<Experiences />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </CardProvider>
  )
}



