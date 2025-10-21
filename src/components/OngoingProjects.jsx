import { useTranslation } from 'react-i18next';
import styles from "./OngoingProjects.module.css";

// Data
import { profileData } from "../data/profileData";

export default function OngoingProjects() {
  const { t } = useTranslation();

  const getProjectKey = (title) => {
    if (title.includes('KachingERP')) return 'kachingERP';
    if (title.includes('CineSystem')) return 'cineSystem';
    return 'kachingERP';
  };

  return (
    <section className={styles.ongoingProjects}>
      <h2>{t('ongoingProjects.title')}</h2>
      <div className={styles.grid}>
        {profileData.ongoingProjects.map((project) => {
          const projectKey = getProjectKey(project.title);
          return (
            <article key={project.title}>
              <h3>{project.title}</h3>
              <p>
                <strong>{project.title}</strong> {t(`ongoingProjects.${projectKey}.description`)}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
