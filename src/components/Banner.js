import { Link } from 'react-router-dom'
import '../styles/Banner.scss'
import logo from '../assets/logo.png'

function Banner() {    
    function UnderlineHomeLink() {
        const underlinedHomeLink = document.querySelector('.kasa-link-home')
        const underlinedAboutUsLink = document.querySelector('.kasa-link-aboutus')
        underlinedHomeLink.style.textDecoration = 'underline'
        underlinedAboutUsLink.style.textDecoration = 'none'
    }
    function UnderlineAboutUsLink() {
        const underlinedHomeLink = document.querySelector('.kasa-link-home')
        const underlinedAboutUsLink = document.querySelector('.kasa-link-aboutus')
        underlinedAboutUsLink.style.textDecoration = 'underline'
        underlinedHomeLink.style.textDecoration = 'none'
    }
    function LoadPagesLinks() {
        const underlinedHomeLink = document.querySelector('.kasa-link-home')
        const underlinedAboutUsLink = document.querySelector('.kasa-link-aboutus')
        if (window.location.pathname !== '/' && window.location.pathname !== '/aboutus') {
            underlinedHomeLink.style.textDecoration = 'none'
            underlinedAboutUsLink.style.textDecoration = 'none'
        }
        if (window.location.pathname === '/aboutus') {
            underlinedAboutUsLink.style.textDecoration = 'underline'
            underlinedHomeLink.style.textDecoration = 'none'
        }
        if (window.location.pathname === '/') {
            underlinedHomeLink.style.textDecoration = 'underline'
            underlinedAboutUsLink.style.textDecoration = 'none'
        }
    }

    return (
        <div className='banner-wrapper' onLoad={LoadPagesLinks}>
        <div className='kasa-banner'>
            <img src={logo} alt='Logo de Kasa' className='kasa-logo' />
            <nav className='kasa-nav'>
                <Link to="/" className='kasa-link kasa-link-home' onClick={UnderlineHomeLink}>Accueil</Link>
                <Link to="/aboutus" className='kasa-link kasa-link-aboutus' onClick={UnderlineAboutUsLink}>A Propos</Link>
            </nav>
        </div>
        </div>
    )
}

export default Banner