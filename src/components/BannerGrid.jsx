import style from './styles/BannerGrid.module.css';
import imgBanner from '../assets/bannersGrids.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const BannerGrid = () => {
  
  const bannersList = [
    {id: 1, title: 'November Outfits', img: imgBanner.banner1},
    {id: 2, title: 'Cashmere Set', img: imgBanner.banner2},
    {id: 3, title: 'The New Nordic', img: imgBanner.banner3},
    {id: 4, title: 'The Leather', img: imgBanner.banner4}
  ]

  return (
    <section className={style.gridContainer}>
      <div className={style.gridContent}>
        {bannersList.map(banner =>(
          <div className={style.bannerCard} key={banner.id}>
            <img src={banner.img} alt={banner.title} />
            <div className={style.bannerMessage}>
              <p>{banner.title}</p>
              <span>Collections <FontAwesomeIcon icon={faArrowRight}/></span>
            </div>
          </div>
          ))}
      </div>
    </section>
  )
}

export default BannerGrid
