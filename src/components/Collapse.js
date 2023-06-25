import '../styles/Collapse.scss'
import { useState } from 'react'
import { useEffect } from 'react'

function Collapse({ title, description }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnArray, setIsAnArray] = useState(false)
  const [styleCollapseBar, setStyleCollapseBar] = useState('collapse__bar--apartPage')
  const [styleCollapseDescription, setStyleCollapseDescription] = useState('collapse__description--apartPage')
  const notAboutusPage = window.location.pathname !== '/aboutus'

  useEffect(()=>{
    if(!notAboutusPage) {
      setStyleCollapseBar('')
      setStyleCollapseDescription('')
    }
  }, [notAboutusPage])

  useEffect(()=>{
    if(typeof description === 'object' && description.hasOwnProperty('length')) {
      // console.log("La description est une liste d'items.")
      setIsAnArray(true)
    }
  }, [description])

  return (
    <div>
        <div>
        {isOpen ? (
          <div className='collapse' onClick={() => setIsOpen(false)}>
            <div className={`collapse__bar ${styleCollapseBar}`}>
              <h1 className='collapse__title'>{title}</h1>
              <button className='collapse__button collapse__button--close' />
            </div>
            {isAnArray ? (
              <ul className={`collapse__description ${styleCollapseDescription}`}>{description.map((item, index) => (
                <li key={`${item}-${index}`}>{item}</li>
              ))}</ul>
            ) : (
              <p className={`collapse__description ${styleCollapseDescription}`}>{description}</p>
            )}
            </div>
        ) : (
          <div onClick={() => setIsOpen(true)}>
            <div className={`collapse__bar ${styleCollapseBar}`}>
              <h1 className='collapse__title'>{title}</h1>
              <button className='collapse__button collapse__button--open' />
            </div>
          </div>
        )}
      </div>
    </div>
      
  )
}
    
export default Collapse