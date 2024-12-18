import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faMoneyBill, faLock, faPhone } from "@fortawesome/free-solid-svg-icons";
import style from './styles/ValuesComponent.module.css';

const ValuesComponent = () => {

const services = [
  {id: 1, icon: faTruck, discripton: 'Free Shipping', subdescripton: 'Order above $200'}, 
  {id: 2, icon: faMoneyBill, discripton: 'Money-back', subdescripton: '30 days-guarantee'},
  {id: 3, icon: faLock, discripton: 'Secure Payments', subdescripton: 'Secured by Stripe'},
  {id: 4, icon: faPhone, discripton: '24/7 Support', subdescripton: 'Phone and Email suppoprt'}
]

  return (
    <section className={style.servicesContainer}>
      <div className={style.servicesContent}>
        {services.map(service => (
          <div className={style.serviceCard} key={service.id}>
            <FontAwesomeIcon icon={service.icon}/>
            <p className={style.descripton}>{service.discripton}</p>
            <p className={style.subDescripton}>{service.subdescripton}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ValuesComponent
