import '../styles/Slideshow.scss'
import { useState } from 'react';

function Slideshow({ currentDatas }) {
    const images = currentDatas.pictures
    let [currentImage, letCurrentImage] = useState(0)
    let [oneOnly, setOneOnly] = useState(true)

    function PrevImage() {
        if (currentImage <= 0) {
            letCurrentImage(currentImage = images.length -1)
        }
    }
    function NextImage() {
        if (currentImage >= images.length -1) {
            letCurrentImage(currentImage = 0)
        }
    }
    function SwitchContent() {
        if (images.length === 1) {
            setOneOnly(oneOnly = false)
        }
    }

    return (
        <div className="slideshow">
            {oneOnly ? (
                <div className='slideshow__switchcontent' onLoad={SwitchContent}>
                    <button className='slideshow__button slideshow__button--prev' onClick={() => {letCurrentImage(currentImage - 1); PrevImage()}} />
                    <img className='slideshow__currentImage' src={images[currentImage]} alt='Photos du logement courant du caroussel' />
                    <button className='slideshow__button slideshow__button--next' onClick={() => {letCurrentImage(currentImage + 1); NextImage()}} />
                    <p className='counter'>{`${currentImage + 1}/${images.length}`}</p>
                </div>
            ) : (
                <div className='slideshow__switchcontent' onLoad={SwitchContent}>
                    <img className='slideshow__currentImage' src={images[currentImage]} alt='Photos du logement courant du caroussel' />
                </div>
            )}
        </div>
    )
}
  
export default Slideshow