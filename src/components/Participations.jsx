//React
import { useTranslation } from 'react-i18next';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Data
import { profileData } from "../data/profileData";

//CSS
import styles from "./Participations.module.css";

export default function Participations() {
  const { t } = useTranslation();

  const getParticipationKey = (title) => {
    if (title.includes('Hack na Ilha')) return 'hackNaIlha';
    if (title.includes('Programação 0')) return 'programacao0';
    if (title.includes('Bate Papo')) return 'batePapoBD';
    if (title.includes('Kraft')) return 'desafioKraft';
    return 'hackNaIlha';
  };

  return (
    <section className={styles.participations}>
      <h2>{t('participations.title')}</h2>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className={styles.participationsSwiper}
      >
        {profileData.participations.map((item) => {
          const participationKey = getParticipationKey(item.title);
          return (
            <SwiperSlide key={item.title}>
              <article className={styles.participationCard}>
                <h3>{item.title}</h3>
                <div className={styles.imageWrapper}>
                  <img src={item.imgSrc} alt={item.alt} />
                </div>
                <p>{t(`participations.${participationKey}.description`)}</p>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
