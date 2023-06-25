import '../styles/Home.scss'
import Landscape from "../components/Landscape";
import CardsList from "../components/CardsList";
// import items from "../datas/Sources"


function Home() {
  // let titles = items.map(item => item.title)
  // console.log(titles)
    return (
      <div className='home'>
        <div className='home__body'>
            <Landscape />
            <div>
              <CardsList />
            </div>
        </div>
      </div>
    );
  }
  
  export default Home;