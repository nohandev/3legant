import style from './styles/VideoSection.module.css';
import video from '../assets/video.png';

const VideoSection = () => {
  return (
    <section className={style.videoSectionContainer}>
      <div className={style.videoSectionContent}>
        <div className={style.introductionMessageContainer}>
          <h3 className={style.aboutTitle}>PROMOTION</h3>
          <h2 className={style.title}>Winter Collectons</h2>
          <p className={style.message}> Introducing the new winter jackets.</p>
        </div>
        <div className={style.videoContainer}>
          <img src={video} alt="imagem ilustrando um vídeo"  style={{width: '100%'}}/>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
