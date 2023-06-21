import { useParams } from "react-router-dom"
import '../styles/Apartment.scss'
import Slideshow from "../components/Slideshow"
import datas from '../datas/logements.json'

function Apartment() {
  const { apartmentId } = useParams()
  return (
    <div className='apartment'>
      <h1>Bienvenue sur la page des appartements !</h1>  
      <Slideshow currentDatas = {datas.find(apartment => apartment.id === apartmentId)} />
    </div>
  )
}


export default Apartment