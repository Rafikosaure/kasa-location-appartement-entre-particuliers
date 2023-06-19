import '../styles/Card.scss'
import CardImage from '../assets/RectangleCard.png'

function Card({ apartmentDatas, index }) {
  function toApartmentPage() {
    document.location.href=`/apartment/${index}`
    console.log(index, apartmentDatas.title)
  }
  return (
    <div className='card' onClick={toApartmentPage}>
      <img className='card__image' src={CardImage} alt="Une carte" />
      <p className='card__title'>{ apartmentDatas.title }</p>
    </div>
  );
  }
  
  export default Card;