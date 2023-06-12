import { Link } from "react-router-dom";

function Home() {
    return (
      <div>
      <div>Bienvenue !</div>
      <Link to='apartment/1'>Appartement</Link>
      </div>
    );
  }
  
  export default Home;