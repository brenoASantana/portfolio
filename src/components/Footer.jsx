// React
import { useTranslation } from 'react-i18next';

// Components
import SocialLinks from "./SocialLinks";

// CSS Module
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <h2>{t('footer.title')}</h2>
      <SocialLinks className={styles.socialLinks} />
      <p>{t('footer.copyright').replace('2025', new Date().getFullYear())}</p>
    </footer>
  );
}
