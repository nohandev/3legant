import style from './styles/TrendingBrands.module.css';
import logos from '../assets/logos.js'

const TrendingBrands = () => {

  const logosImg = [
    {id: 1, img: logos.logo1, alt: 'Logo 1'},
    {id: 2, img: logos.logo2, alt: 'Logo 2'},
    {id: 3, img: logos.logo3, alt: 'Logo 3'},
    {id: 4, img: logos.logo4, alt: 'Logo 4'},
    {id: 5, img: logos.logo5, alt: 'Logo 5'},
    {id: 6, img: logos.logo6, alt: 'Logo 6'}
  ]
  return (
    <section className={style.brandsContainer}>
      <div className={style.brandsContent}>
        <h3>Trending Brands</h3>
        <div className={style.brandsLogo}>
        {logosImg.map(logo => (
          <img
          key={logo.id}
          src={logo.img}
          alt={logo.alt}
          />
        ))}
        </div>
      </div>
    </section>
  )
}

export default TrendingBrands
