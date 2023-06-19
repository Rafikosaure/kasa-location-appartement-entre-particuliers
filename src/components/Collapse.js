import '../styles/Collapse.scss'
import { useState } from 'react'

function Collapse({ principleData }) {
  const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
          {isOpen ? (
            <div className='collapse' onClick={() => setIsOpen(false)}>
              <div className='collapse__bar'>
                <h1 className='collapse__title'>{principleData.title}</h1>
                <button className='collapse__button collapse__button--close' />
              </div>
              <p className='collapse__description'>{principleData.description}</p>
            </div>
          ) : (
            <div onClick={() => setIsOpen(true)}>
              <div className='collapse__bar'>
                <h1 className='collapse__title'>{principleData.title}</h1>
                <button className='collapse__button collapse__button--open' />
              </div>
            </div>
          )}
        </div>
    )
}
    
export default Collapse