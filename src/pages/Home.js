import { Link } from "react-router-dom";
import '../styles/Home.scss'
import Landscape from "../components/Landscape";


function Home() {
    return (
      <div className='home-page'>
        <div className='home-body'>
            <Landscape />
            <div className="cards-container">
              <Link to='apartment/1'>Appartement</Link>
            </div>
        </div>
      </div>
    );
  }
  
  export default Home;