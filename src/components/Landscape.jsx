import '../styles/Landscape.scss'
import LandscapeHome from '../assets/landscape-home.jpg'
import LandscapeAboutUs from '../assets/landscape-aboutus.jpg'

function Landscape() {
    let landscapeImage = LandscapeHome
    let imageLegend = 'Chez vous, partout et ailleurs'
    if (window.location.pathname === '/aboutus') {
        landscapeImage = LandscapeAboutUs
        imageLegend = ''
    }
    return (
        <div className="landscape">
            <div className="landscape__overlay">
                <img
                    className="landscape__image"
                    src={landscapeImage}
                    alt="Littoral rocheux secoué par les vagues"
                />
            </div>
            <p className="landscape__legend">{imageLegend}</p>
        </div>
    )
}

export default Landscape
