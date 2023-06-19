import datas from '../datas/logements.json'
import '../styles/CardsList.scss'
import Card from './Card'


function CardsList() {
    return (
        <div className='cards-list'>
            {datas.map((apartment, index) => (
                <Card key={`${apartment}-${index}`} apartment={apartment} />
            ))}
        </div>
    )
}

export default CardsList