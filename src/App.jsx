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

export const App = () => {

  return (
    <CardProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/travel-details" element={<TravelDetails />} />
          <Route path="/home/login" element={<Login />} />
          <Route path="/home/register" element={<Register />} />
          <Route path="/home/travel-details/pay" element={<Reservar />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </CardProvider>
  )
}



