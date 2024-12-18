import style from './styles/Footer.module.css';
import logo from '../assets/logo-navbar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube  } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Footer = () => {

  const [ email, setEmail] = useState('')

  return (
    <footer className={style.footerContainer}>
      <section className={style.footerContent}>
        <div className={`${style.ContactByAddres} ${style.card}`}>
          <div className={style.logo}>
            <img src={logo} alt="Company logo" />
          </div>
          <div className={style.description}>
            <p>43111 Hai Trieu street</p>
            <p>District 1, HCMC</p>
            <p>Vietnam</p>
            <p>84-756-3237</p>
          </div>
          <div className={style.socialNetworks}>
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faYoutube} />
          </div>
        </div>
        <div className={`${style.pageContainer} ${style.card}`}>
          <div className={style.title}>
            <h1>Page</h1>
          </div>
          <div className={style.description}>
            <p>Home</p>
            <p>Shope</p>
            <p>Product</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className={`${style.infoContainer} ${style.card}`}>
          <div className={style.title}>
            <h1>Info</h1>
          </div>
          <div className={style.description}>
            <p>Shipping Policy</p>
            <p>Return & Refund</p>
            <p>Support</p>
            <p>FAQs</p>
          </div>
        </div>
        <div className={`${style.ContactByEmail} ${style.card}`}>
          <div className={style.title}>
            <h1>Join Newsletter</h1>            
          </div>
          <div className={style.descriptionEmail}>
            <p>Subscribe our newsletter to get more deals, new products and promotions</p>
          </div>
          <div className={style.inputContainer}>
            <input type="text" placeholder='Enter your email' />
            <button><FontAwesomeIcon icon={faArrowRight} /></button>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
