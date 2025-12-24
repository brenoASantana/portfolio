// React
import { useTranslation } from "react-i18next";

// Data
import { profileData } from "../data/profileData";

// Module CSS
import styles from "./Profile.module.css";

export default function Profile() {
  const { t } = useTranslation();

  return (
    <article className={styles.profile}>
      <div className={styles.imageContainer}>
        <img
          className={styles.profilePicture}
          src="https://github.com/brenoASantana.png"
          alt="Foto de perfil de Breno Santana"
          loading="eager"
          decoding="async"
        />
      </div>
      <div className={styles.profileText}>
        <p className={styles.greeting}>{t("profile.greeting")}</p>
        <h1>{profileData.name}</h1>
        <p className={styles.title}>{t("profile.title")}</p>
        <p className={styles.subtitle}>{t("profile.subtitle")}</p>
        <div className={styles.cta}>
          <a href="#contact" className={styles.ctaButton}>
            {t("profile.cta")}
          </a>
          <a
            href="https://linkedin.com/in/brenoasantana"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButtonSecondary}
          >
            {t("profile.viewLinkedIn")}
          </a>
        </div>
      </div>
    </article>
  );
}
