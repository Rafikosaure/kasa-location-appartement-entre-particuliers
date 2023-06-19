import '../styles/Card.scss'
import CardImage from '../assets/RectangleCard.png'

function Card({ apartment }) {
    return (
      <div className='card'>
        <img className='card__image' src={CardImage} alt="Une carte" />
        <p className='card__title'>{ apartment.title }</p>
      </div>
    );
  }
  
  export default Card;