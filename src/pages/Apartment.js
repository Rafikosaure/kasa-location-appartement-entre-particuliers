import { useParams, Navigate } from "react-router-dom"
import datas from '../datas/logements.json'

function Apartment() {
  const { apartmentNumber } = useParams()
  if (parseInt(apartmentNumber) >= 0 && parseInt(apartmentNumber) <= datas.length) {
    return (
    <div><h1>Appartement {apartmentNumber}</h1></div>
    )
  } else {
    return <Navigate replace to="*" />
  }
}


export default Apartment