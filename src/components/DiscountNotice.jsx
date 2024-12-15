import { useState } from 'react'
import style from './styles/DiscountNotice.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket, faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons';


const DiscountNotice = () => {

  const [isVisible, setIsVisible] = useState(true)

  const handleCloseDiscountNotice = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <aside className={style.discountContainer}>
      <span><FontAwesomeIcon icon={faTicket}/></span>
      <p className={style.discountMessage}>30% off storewide - Limited time </p>
      <p className={style.shopNowMessage}>Shop Now! <FontAwesomeIcon icon={faArrowRight}/></p>
      <button className={style.closeDiscount} onClick={handleCloseDiscountNotice}><FontAwesomeIcon icon={faXmark}/></button>
    </aside>
  )
}

export default DiscountNotice
