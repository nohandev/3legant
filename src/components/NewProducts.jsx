import { useState } from 'react';
import style from './styles/NewProducts.module.css';
import products from '../assets/products.js';
import EvaluationComponent from './EvaluationComponent.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const NewProducts = () => {
  const [listProducts, setListProducts] = useState([
    {id: 1, title: "96 Nuptse Dip Dye bomber Jacket", price: '$400.00', img: products.product1, mouseOver: false},
    {id: 2, title: "1996 Retro Nuptse Cashmere Jacket in Gray", price: '$349.99', img: products.product2, mouseOver: false},
    {id: 3, title: "Chilliwack black Bomber HUMANATURE", price: '$140.99', img: products.product3, mouseOver: false},
    {id: 4, title: "Freestyle Crew Racer leather jacket", price: '$300.00', img: products.product4, mouseOver: false}
  ])

  const showButtons = (id) => {
    const newProductList = [...listProducts]
    newProductList.map(product => (product.id === id ? product.mouseOver = true : !product.mouseOver))
    setListProducts(newProductList)
  }

  const hideButtons = (id) => {
    const newProductList = [...listProducts]
    newProductList.map(product => (product.id === id ? product.mouseOver = false : !product.mouseOver))
    setListProducts(newProductList)
  }

  return (
    <section className={style.productCarouselContainer}>
      <div className={style.productCarouselContent}> 
        <h2>Just in</h2>
        <div className={style.ListOfAddedProducts}>
          {listProducts.map(product => (
            <div 
            className={style.cardProduct} 
            key={product.id} 
            onMouseEnter={() => showButtons(product.id)}
            onMouseLeave={() => hideButtons(product.id)}
            >
              <img src={product.img} alt={product.title} />
              <EvaluationComponent/>
              <p>{product.title}</p>
              <span>{product.price}</span>
              <span className={style.warningBox}>NEW</span>
              <button className={product.mouseOver ? style.favoriteButton : style.ButtonHide}><FontAwesomeIcon icon={faHeart}/></button>
              <button className={product.mouseOver ? style.addToCartButton : style.ButtonHide}>Add to cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default NewProducts