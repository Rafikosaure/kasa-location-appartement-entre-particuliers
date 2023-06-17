import '../styles/Card.scss'
import CardImage from '../assets/RectangleCard.png'

function Card({ apartmentTitle }) {
    return (
      <div className='card'>
        <img className='card-image' src={CardImage} alt="Une carte" />
        <p className='card-title'>{ apartmentTitle }</p>
      </div>
    );
  }
  
  export default Card;