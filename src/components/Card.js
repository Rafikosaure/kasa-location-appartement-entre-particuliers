import '../styles/Card.scss'
import CardImage from '../assets/RectangleCard.png'

function Card() {
    return (
      <div className='card'>
        <img className='card-image' src={CardImage} alt="Une carte"/>
        <p className='card-title'>Titre de la location</p>
      </div>
    );
  }
  
  export default Card;