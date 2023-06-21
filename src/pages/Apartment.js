import { useParams } from "react-router-dom"
import '../styles/Apartment.scss'

function Apartment() {
  const { apartmentId } = useParams()
  return (
    <div className='apartment'>
      <div><h1>Identifiant de l'appartement: "{apartmentId}"</h1></div>
    </div>
  )
  // } else {
  //   return <Navigate replace to="*" />
  // }
}


export default Apartment