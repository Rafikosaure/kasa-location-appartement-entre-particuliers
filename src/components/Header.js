import { Link } from 'react-router-dom'
import '../styles/Header.scss'
import logo from '../assets/logo.png'

function Header() {
    return (
        <div className='header'>
            <div className='banner'>
                <img src={logo} alt='Logo de Kasa' className='banner__logo' />
                <nav className='banner__navigation'>
                    <Link to="/" className='banner__navlink'>Accueil</Link>
                    <Link to="/aboutus" className='banner__navlink'>A Propos</Link>
                </nav>
            </div>
        </div>
    )
}

export default Header