import style from './styles/InstagramNewsFeed.module.css';
import posts from '../assets/newsfeedImages.js';

const InstagramNewsFeed = () => {

  const postImagens = [
    {id: 1, img: posts.post1, alt: 'Recent instagram posts'},
    {id: 2, img: posts.post2, alt: 'Recent instagram posts'},
    {id: 3, img: posts.post3, alt: 'Recent instagram posts'},
    {id: 4, img: posts.post4, alt: 'Recent instagram posts'},
  ]

  return (
    <section className={style.newsfeedContainer}>
      <div className={style.newsfeedContent}>
        <hgroup className={style.titleContainer}>
          <h2 className={style.aboutTitle}>NEWSPEED</h2>
          <h1 className={style.title}>Instagram</h1>
          <h3 className={style.subTitle}>Follow us on social media for mor discount & promotions</h3>
          <span className={style.networkSocialName}>@3legant_oficial</span>
        </hgroup>
        <div className={style.postsContainer}>
          {postImagens.map(post => (
            <div className={style.postCard} key={post.id}>
              <img src={post.img} alt={post.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InstagramNewsFeed
