import style from "./styles/BestSeller.module.css";
import productBanner from "../assets/products.js";
import EvaluationComponent from "./EvaluationComponent.jsx";

const BestSeller = () => {

  const productsList = [
    {id: 1, title: "96 Nuptse Dip Dye bomber Jacket", img: productBanner.product1, price: 400.99, isPromotion: true, oldPrice: 1000.00},
    {id: 2, title: "1996 Retro Nuptse Cashmere Jacket in Gray", img: productBanner.product2, price: 149.99, isPromotion: false},
    {id: 3, title: "Chilliwack black Bomber HUMANATURE", img: productBanner.product3, price: 1195.99, isPromotion: false},
    {id: 4, title: "Freestyle Crew Racer leather jacket", img: productBanner.product4, price: 595.00, isPromotion: false},
    {id: 5, title: "Men's Diamond Quilted Bomber Hoody", img: productBanner.product5, price: 199.95, isPromotion: false},
    {id: 6, title: "Men's Torrentshell 3L Rain Jacket in Brown", img: productBanner.product6, price: 149.00, isPromotion: false},
    {id: 7, title: "Oversized real leather harrington jacket in black",img: productBanner.product7, price: 249.99, isPromotion: false},
    {id: 8, title: "Paradigm Chilliwack coat Black Label", img:productBanner.product8, price: 1495.00, isPromotion: false},
  ]

  return (
    <section className={style.bestSellerContainer}>
      <h1>best Seller</h1>
      <div className={style.bestSellerContent}>
        {productsList.map(product => (
          <div className={style.productCard} key={product.id}>
            <img src={product.img} alt={product.title} />
            <EvaluationComponent/>
            <p className={style.titleCard}>{product.title}</p>
            <div style={{display: "flex", gap: "14px", alignItems: 'center'}}>
              <p className={style.priceCard}>${product.price}</p>
              {(product.isPromotion ? <p className={style.oldPriceCard}>${product.oldPrice}</p> : null)}
            </div>
            <span className={style.hotBox}>HOT</span>
            <span className={product.isPromotion ? style.discountBox : style.hideSomething}>-50%</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BestSeller
