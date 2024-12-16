import { useState } from 'react';
import logo from './../assets/logo-navbar.png';
import style from './styles/Navigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser ,faBagShopping } from '@fortawesome/free-solid-svg-icons';


const Navigation = () => {

  const [itemInBag, setItemInBag] = useState(0)

  return (
    <nav className={style.menuNavigationContainer}>
      <div className={style.menuNavigationContent}>
      <div className={style.navbarLogo}>
        <img src={logo} alt="Logo 3legant" />
      </div>

      <div className={style.linksNavigation}>
        <ul>
           <li>Home</li>
           <li>Shop</li>
           <li>Product</li>
           <li>Contact Us</li>
        </ul>
      </div>

      <div className={style.userNavigation}>
        <FontAwesomeIcon icon={faMagnifyingGlass}/>
        <FontAwesomeIcon icon={faUser}/>
        <div className={style.bagShoppingContainer}>
          <FontAwesomeIcon icon={faBagShopping}/>
          <span>{itemInBag}</span>
        </div>
      </div>
      </div>
    </nav>
  )
}

export default Navigation
