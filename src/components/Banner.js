import { Link } from 'react-router-dom'
import '../styles/Banner.scss'
import logo from '../assets/logo.png'

function Banner() {    
    function UnderlineHomeLink() {
        const underlinedHomeLink = document.querySelector('.banner__navlink--home')
        const underlinedAboutUsLink = document.querySelector('.banner__navlink--aboutus')
        underlinedHomeLink.style.textDecoration = 'underline'
        underlinedAboutUsLink.style.textDecoration = 'none'
    }
    function UnderlineAboutUsLink() {
        const underlinedHomeLink = document.querySelector('.banner__navlink--home')
        const underlinedAboutUsLink = document.querySelector('.banner__navlink--aboutus')
        underlinedAboutUsLink.style.textDecoration = 'underline'
        underlinedHomeLink.style.textDecoration = 'none'
    }
    function LoadPagesLinks() {
        const underlinedHomeLink = document.querySelector('.banner__navlink--home')
        const underlinedAboutUsLink = document.querySelector('.banner__navlink--aboutus')
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
        <div className='banner__wrapper' onLoad={LoadPagesLinks}>
            <div className='banner'>
                <img src={logo} alt='Logo de Kasa' className='banner__logo' />
                <nav className='banner__navigation'>
                    <Link to="/" className='banner__navlinks banner__navlink--home' onClick={UnderlineHomeLink}>Accueil</Link>
                    <Link to="/aboutus" className='banner__navlinks banner__navlink--aboutus' onClick={UnderlineAboutUsLink}>A Propos</Link>
                </nav>
            </div>
        </div>
    )
}

export default Banner