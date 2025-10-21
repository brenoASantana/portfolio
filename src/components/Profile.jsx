// React
import { useTranslation } from 'react-i18next';

// Data
import { profileData } from "../data/profileData";

// Module CSS
import styles from "./Profile.module.css";

export default function Profile() {
  const { t } = useTranslation();

  return (
    <article className={styles.profile}>
      <img
        className={styles.profilePicture}
        src="https://github.com/brenoASantana.png"
        alt="Foto de perfil"
      />
      <div className={styles.profileText}>
        <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
          {t('profile.greeting')}
        </p>
        <h2>{profileData.name}</h2>
        <p>
          <strong>{t('profile.title')}</strong>
        </p>
        <p>
          {t('profile.subtitle')}
        </p>
      </div>
    </article>
  );
}
