import style from './styles/BlogSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import bannersBlog from '../assets/articlesBanners.js';

const BlogSection = () => {

const banners = [
  {id: 1, img: bannersBlog.banner1, alt: 'Banner Of Article'},
  {id: 2, img: bannersBlog.banner2, alt: 'Banner Of Article'},
  {id: 3, img: bannersBlog.banner3, alt: 'Banner Of Article'}
]

  return (
 <section className={style.blogSectionContainer}>
  <div className={style.blogSectionContent}>
    <hgroup className={style.titleContainer}>
      <h1>Latest Articles</h1>
      <p>View More <FontAwesomeIcon icon={faArrowRight} /></p>
    </hgroup>

    <article className={style.articlesContainer}>
      {banners.map(banner => (
        <div className={style.bannerCard} key={banner.id}>
          <img src={banner.img} alt={banner.alt} />
          <p className={style.text}>2024 Holiday Gift Guide</p>
          <p className={style.link}>Read More <FontAwesomeIcon icon={faArrowRight}/></p>
        </div>
      ))}
    </article>
  </div>
 </section>
  )
}

export default BlogSection
