import { Link } from "react-router-dom";
import '../styles/Home.scss'
import Landscape from "../components/Landscape";
import CardsList from "../components/CardsList";



function Home() {
    return (
      <div className='home'>
        <div className='home__body'>
            <Landscape />
            <div>
              <CardsList />
              <Link to='apartment/1'>Appartement</Link>
            </div>
        </div>
      </div>
    );
  }
  
  export default Home;