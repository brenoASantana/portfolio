//React
import { useTranslation } from "react-i18next";
import { profileData } from "../data/profileData";
import styles from "./Participations.module.css";

// Import dinâmico para evitar falha em ambiente de teste/JSDOM
let Swiper = ({ children, ...rest }) => <div {...rest}>{children}</div>;
let SwiperSlide = ({ children, ...rest }) => <div {...rest}>{children}</div>;
let Navigation;
let Pagination;
let A11y;
try {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    const swiperReact = require("swiper/react");
    Swiper = swiperReact.Swiper;
    SwiperSlide = swiperReact.SwiperSlide;
    // eslint-disable-next-line global-require
    const swiperModules = require("swiper/modules");
    Navigation = swiperModules.Navigation;
    Pagination = swiperModules.Pagination;
    A11y = swiperModules.A11y;
    // CSS (somente em runtime browser)
    require("swiper/css");
    require("swiper/css/navigation");
    require("swiper/css/pagination");
  }
} catch (e) {
  // Fallback silencioso em testes
  Navigation = Pagination = A11y = {};
}

// (imports movidos para topo)

export default function Participations() {
  const { t } = useTranslation();

  const getParticipationKey = (title) => {
    if (title.includes("Hack na Ilha")) return "hackNaIlha";
    if (title.includes("Programação 0")) return "programacao0";
    if (title.includes("Bate Papo")) return "batePapoBD";
    if (title.includes("Kraft")) return "desafioKraft";
    return "hackNaIlha";
  };

  return (
    <section className={styles.participations}>
      <h2>{t("participations.title")}</h2>
      <Swiper
        modules={[Navigation, Pagination, A11y].filter(Boolean)}
        spaceBetween={30}
        slidesPerView={1}
        navigation={!!Navigation}
        pagination={Pagination ? { clickable: true } : false}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 25 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
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
