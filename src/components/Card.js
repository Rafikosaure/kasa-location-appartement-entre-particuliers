import '../styles/Card.scss'
import Overlay from '../assets/RectangleCard.png'

function Card({ apartment }) {
  function toApartmentPage() {
    document.location.href=`/apartment/${apartment.id}`
    console.log(apartment.id, apartment.title)
  }
  return (
    <div className='card' onClick={toApartmentPage}>
      <img className='card__overlay' src={ Overlay } alt="Overlay" />
      <img className='card__image' src={ apartment.cover } alt="Intérieur d'un appartement" />
      <p className='card__title'>{ apartment.title }</p>
    </div>
  );
}
  
export default Card;