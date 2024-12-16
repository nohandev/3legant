import style from './styles/NewProducts.module.css';
import products from '../assets/products.js';
import EvaluationComponent from './EvaluationComponent.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const NewProducts = () => {
  const listProducts = [
    {id: 1, title: "96 Nuptse Dip Dye bomber Jacket", price: '$400.00', img: products.product1},
    {id: 2, title: "1996 Retro Nuptse Cashmere Jacket in Gray", price: '$349.99', img: products.product2},
    {id: 3, title: "Chilliwack black Bomber HUMANATURE", price: '$140.99', img: products.product3},
    {id: 4, title: "Freestyle Crew Racer leather jacket", price: '$300.00', img: products.product4}
  ]

  return (
    <section className={style.productCarouselContainer}>
      <div className={style.productCarouselContent}> 
        <h2>Just in</h2>
        <div className={style.ListOfAddedProducts}>
          {listProducts.map(product => (
            <div 
            className={style.cardProduct} 
            key={product.id} 
            onMouseMove={() => changeToTrue(product.id)}
            >
              <img src={product.img} alt={product.title} />
              <EvaluationComponent/>
              <p>{product.title}</p>
              <span>{product.price}</span>
              <span className={style.warningBox}>NEW</span>
              <button className={style.favoriteButton}><FontAwesomeIcon icon={faHeart}/></button>
              <button className={product.mouseHover ? style.addToCartButtonShow : style.addToCartButtonHide}>Add to cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default NewProducts