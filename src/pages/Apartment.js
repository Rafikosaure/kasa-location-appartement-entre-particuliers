import { useParams } from "react-router-dom"
import '../styles/Apartment.scss'
import Slideshow from "../components/Slideshow"
import Datas from '../datas/logements.json'
import TagName from "../components/TagName"

function Apartment() {
  const { apartmentId } = useParams()
  return (
    <div className='apartment'> 
      <Slideshow currentDatas = {Datas.find(apartment => apartment.id === apartmentId)} />
      <div className="apartment__datas">
        <div className="apartment__datas--orientation">
          <div>
            <h1 className="apartment__title">Couroucoucou Steuch Steuch</h1>
            <p className="apartment__description">Apart de misère, passez votre chemin !</p>
            <div className="apartment__Tagnames">
              <TagName />
              <TagName />
              <TagName />
            </div>
          </div>
          <div>
            <div className="apartment__host">
              <p className="apartment__hostName">Nom de l'hôte</p>
              <img className="apartment__hostPhoto" src="" alt="" />
            </div>
            <span>Stars</span>
          </div>
        </div>
        <div className="apartment__collapseComponents">
          <p className="apartement__collapse">C'est une bonne situation ça, scribe ?</p>
          <p className="apartement__collapse">Je ne crois pas qu'il y ai de bonnes ou de mauvaises situations.</p>
        </div>
        
      </div>
    </div>
  )
}


export default Apartment