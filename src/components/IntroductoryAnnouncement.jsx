import style from './styles/IntroductoryAnnouncement.module.css';
import announceImg from './../assets/introductory-announcement-image.png';

const IntroductoryAnnouncement = () => {
  return (
    <section className={style.announceContainer}>
      <div className={style.imgContainer}>
        <img src={announceImg} alt="Imagem para o anúncio" />
      </div>
      <div className={style.messageContainer}>
        <div className={style.messageContent}>
          <h1>Bring the warmth.</h1>
          <p>Everyone needs a good winter jacket. </p>
          <p>Find yours with our collection and more.</p>
          <button>Shopping Now</button>
        </div>
      </div>
    </section>
  )
}

export default IntroductoryAnnouncement
