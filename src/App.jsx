import './assets/styles/general/App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CardProvider } from './context/CardContext.jsx'
import { useCart } from './context/CardContext.jsx'
import { NavBar } from './components/general/NavBar.jsx'
import { Footer } from './components/general/Footer.jsx'
import { Home } from './components/home/Home.jsx'
import { TravelDetails } from './components/travel_details/TravelDetails.jsx'

export const App = () => {

  return (
    <CardProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/travel-details" element={<TravelDetails />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </CardProvider>
  )
}



