import { Link } from "react-router-dom";
import '../styles/Home.scss'
import Landscape from "../components/Landscape";
import Card from "../components/Card";


function Home() {
    return (
      <div className='home-page'>
        <div className='home-body'>
            <Landscape />
            <div className="cards-container">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              {/* <Link to='apartment/1'>Appartement</Link> */}
            </div>
        </div>
      </div>
    );
  }
  
  export default Home;