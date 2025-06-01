// React
import { useTranslation } from 'react-i18next';

// Data
import { profileData } from "../data/profileData";

// CSS
import styles from "./Skills.module.css";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <article className={styles.ul}>
      <div className={styles.skillsContainer}>
        <h2>{t('skills.title')}</h2>
        <div className={styles.paragraph}>
          {profileData.skills.map((skill) => (
            <p key={skill}>{skill}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
