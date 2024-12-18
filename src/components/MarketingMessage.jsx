import banner from '../assets/marketing message banner.png';
import style from './styles/MarketingMessage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const MarketingMessage = () => {
  return (
    <section className={style.marketingMessageContainer}>
      <div className={style.marketingMessageContent}>
        <div style={{flex: '1'}}>
          <img src={banner} alt='illustrative banner' style={{width: '100%'}}/>
        </div>
        <div style={{display: 'flex', flex: '1', alignItems: 'center'}}>
          <div className={style.messageContent}>
            <p className={style.saleUp}>SALE UP TO 35% OFF</p>
            <h1>HUNDREDS of New lower prices!</h1>
            <p>hurry up!!! Winter ismcoming!</p>
            <p className={style.shopNow}>Shop Now <FontAwesomeIcon icon={faArrowRight}/></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MarketingMessage
