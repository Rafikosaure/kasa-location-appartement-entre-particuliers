import { useParams } from "react-router-dom"

function Apartment() {
  const { apartmentNumber } = useParams()
  return (
    <div>
      <h1>Appartement {apartmentNumber}</h1>
    </div>
  )
}

export default Apartment