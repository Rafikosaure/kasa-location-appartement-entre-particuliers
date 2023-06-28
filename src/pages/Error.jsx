import '../styles/Error.scss'
import Error404 from '../assets/404.png'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div className="error">
            <div className="error__body">
                <img className="error__image" src={Error404} alt="Erreur 404" />
                <h1 className="error__title">
                    Oups! La page que vous demandez n'existe pas.
                </h1>
                <Link className="error__redirectlink" to="/">
                    Retourner sur la page d'accueil
                </Link>
            </div>
        </div>
    )
}

export default Error
