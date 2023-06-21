import '../styles/Slideshow.scss'

function Slideshow({ currentDatas }) {
    return (
        <div className="slideshow">
            <div>{currentDatas.title}</div>
        </div>
      
    );
  }
  
  export default Slideshow;