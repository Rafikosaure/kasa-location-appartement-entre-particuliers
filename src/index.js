import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/index.scss'
import Footer from './components/Footer'
import Header from './components/Header'
import AboutUs from './pages/AboutUs'
import Apartment from './pages/Apartment'
import Error from './pages/Error'
import Home from './pages/Home'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Router>
            <Header />
                <Routes>
                    <Route path="/kasa-location-appartement-entre-particuliers" element={<Home />} />
                    <Route path="/kasa-location-appartement-entre-particuliers/apartment/:apartmentId" element={<Apartment />} />
                    <Route path="/kasa-location-appartement-entre-particuliers/aboutus" element={<AboutUs />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
)