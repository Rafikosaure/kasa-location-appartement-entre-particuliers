import Datas from '../datas/logements.json'
import '../styles/CardsList.scss'
import Card from './Card'


function CardsList() {
    return (
        <div className='cardslist'>
            {Datas.map(apartment => (
                <Card key={`${apartment.id}`} apartment={apartment} />
            ))}            
        </div>
    )
}

export default CardsList