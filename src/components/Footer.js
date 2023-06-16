import '../styles/Footer.scss'
import LogoFooter from '../assets/logo-footer.png'

function Footer() {
    return (
      <div className="div-footer">
        <img src={LogoFooter} alt='Logo de Kasa' className='logo-footer' />
        <p className='text-footer'>© 2020 Kasa. All rights reserved</p>
      </div>
    );
  }
  
  export default Footer;