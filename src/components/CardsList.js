import datas from '../datas/logements.json'
import '../styles/CardsList.scss'
import Card from './Card'

function CardsList() {
    return (
        <div className='cards-list'>
            {datas.map((card, index) => (
                <Card key={`${card}-${index}`}></Card>
            ))}
        </div>
    )
}

export default CardsList