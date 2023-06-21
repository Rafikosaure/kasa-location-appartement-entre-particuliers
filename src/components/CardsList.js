import datas from '../datas/logements.json'
import '../styles/CardsList.scss'
import Card from './Card'


function CardsList() {
    
    return (
        <div className='cardslist'>
            {datas.map(apartment => (
                <Card key={`${apartment.id}`} apartment={apartment} />
            ))}
        </div>
    )
}

export default CardsList