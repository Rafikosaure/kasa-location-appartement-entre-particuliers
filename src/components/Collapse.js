import '../styles/Collapse.scss'
import { useState } from 'react'
import { useEffect } from 'react'

function Collapse({ title, description }) {
   // Composant ouvert ou non ?
  const [isOpen, setIsOpen] = useState(false)

   // La description: liste ou chaîne de caractères ?
  const [isAList, setIsAList] = useState(false)
  
  // Classes CSS en fonction de la page courante
  const [styleCollapseBar, setStyleCollapseBar] = useState('collapse__bar--apartPage')
  const [styleCollapseDescription, setStyleCollapseDescription] = useState('collapse__description--apartPage')
  
  const aboutusPage = window.location.pathname === '/aboutus'

  // Gestion des styles du composant selon la page
  useEffect(()=>{
    if(aboutusPage) {
      setStyleCollapseBar('')
      setStyleCollapseDescription('')
    }
  }, [aboutusPage])

  // Détecter si le contenu de la description est une liste
  useEffect(()=>{
    if(typeof description === 'object' && description.hasOwnProperty('length')) {
      setIsAList(true)
    }
  }, [description])

  return (
    <div>
      <div>
        {isOpen ? (
          <div className='collapse'>
            <div className={`collapse__bar ${styleCollapseBar}`}>
              <h1 className='collapse__title'>{title}</h1>
              <button className='collapse__button collapse__button--close' onClick={() => setIsOpen(false)} />
            </div>
            {isAList ? (
              <ul className={`collapse__description ${styleCollapseDescription}`}>{description.map((item, index) => (
                <li key={`${item}-${index}`}>{item}</li>
              ))}</ul>
            ) : (
              <p className={`collapse__description ${styleCollapseDescription}`}>{description}</p>
            )}
            </div>
        ) : (
          <div>
            <div className={`collapse__bar ${styleCollapseBar}`}>
              <h1 className='collapse__title'>{title}</h1>
              <button className='collapse__button collapse__button--open' onClick={() => setIsOpen(true)} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
    
export default Collapse