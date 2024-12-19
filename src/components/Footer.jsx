import style from './styles/Footer.module.css';
import logo from '../assets/logo-navbar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube  } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import cards from '../assets/cardsBanner.js';

const Footer = () => {

  const [email, setEmail] = useState('')

  const captureEmail = () => {
    if (email === '') {
      alert("O campo do email está vazio!")
    } else {
    console.log(email)
    setEmail('')
    }
  }

  const paymentsMethods = [
    {id: 1, card: cards.card1, alt: 'card banner'},
    {id: 2, card: cards.card2, alt: 'card banner'},
    {id: 3, card: cards.card3, alt: 'card banner'},
    {id: 4, card: cards.card4, alt: 'card banner'},
    {id: 5, card: cards.card5, alt: 'card banner'},
    {id: 6, card: cards.card6, alt: 'card banner'}
  ]

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
            <p>Shop</p>
            <p>Product</p>
            <p>Articles</p>
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
            <input
            type="text" 
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
             />
            <button 
            className={style.submitEmail}
            type='submit'
            onClick={captureEmail}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </section>
      <section className={style.finalConsiderations}>
        <div className={style.privacyPolicyContainer}>
          <p>Copyright © 2023 3legant. All rights reserved</p>
          <span>|</span>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>

        <div className={style.cardsLogosContainer}>
          {paymentsMethods.map(card => (
            <img key={card.id} src={card.card} alt={card.alt}/>
          ))}
        </div>
      </section>
    </footer>
  )
}

export default Footer
