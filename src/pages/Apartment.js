import { useParams } from "react-router-dom"
import '../styles/Apartment.scss'
import Slideshow from "../components/Slideshow"
import Datas from '../datas/logements.json'
import TagName from "../components/TagName"
import { useEffect } from "react"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import Collapse from "../components/Collapse"
import Rating from "../components/Rating"

function Apartment() {
  const { apartmentId } = useParams()
  let currentDatas = Datas.find(apartment => apartment.id === apartmentId)

  // Ici commence la redirection si url incorrecte
  const [ redirectTo, setRedirectTo] = useState(false)
  const currentPathname = window.location.pathname

  useEffect(() => {
    if (currentPathname !== `/apartment/${apartmentId}`) {
      setRedirectTo(true)
    }
  }, [currentPathname, apartmentId])

  if (redirectTo) {
    console.log("La redirection fonctionne.")
    return <Navigate to="*" />
  } else {
    return (
      <div className='apartment'> 
        <Slideshow currentDatas={currentDatas} />
        <div className="apartment__datas">
          <div className="apartment__datas--orientation">
            <div>
              <h1 className="apartment__title">{currentDatas.title}</h1>
              <p className="apartment__location">{currentDatas.location}</p>
              <div className="apartment__Tagnames">
              {currentDatas.tags.map((tag, index) => (
                <TagName key={`${tag}-${index}`} tagText={tag} />
              ))}
              </div>
            </div>
            <div>
              <div className="apartment__host">
                <p className="apartment__hostName">{currentDatas.host.name}</p>
                <img className="apartment__hostPhoto" src={currentDatas.host.picture} alt="Hôte de l'appartement" />
              </div>
              <Rating rating={currentDatas.rating} />
            </div>
          </div>
          <div className="apartment__collapseComponents">
            <Collapse title="Description" description={currentDatas.description} />
            <Collapse title="Equipements" description={currentDatas.equipments} />
          </div>
          
        </div>
      </div>
    )
  }
}

export default Apartment