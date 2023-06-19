import datas from '../datas/logements.json'
import '../styles/CardsList.scss'
import Card from './Card'


function CardsList() {
    
    return (
        <div className='cardslist'>
            {datas.map((apartmentDatas, index) => (
                <Card key={`${apartmentDatas}-${index}`} apartmentDatas={apartmentDatas} index={index} />
            ))}
        </div>
    )
}

export default CardsList