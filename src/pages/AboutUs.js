import '../styles/AboutUs.scss'
import Landscape from "../components/Landscape";
import Collapse from '../components/Collapse';
import PrinciplesDatas from '../datas/valeurs.json'

function AboutUs() {
    return (
      <div className='aboutus'>
        <div className='aboutus__body'>
          <Landscape />
        </div>
        <div className='aboutus__collapses'>
            {PrinciplesDatas.map((principleData, index) => (
                <Collapse key={`${principleData}-${index}`} principleData={principleData} index={index} />
            ))}
        </div>
      </div>
      
    );
  }
  
  export default AboutUs;