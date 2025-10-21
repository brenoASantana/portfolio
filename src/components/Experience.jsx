// React
import { useTranslation } from 'react-i18next';

// Data
import { profileData } from "../data/profileData";

// CSS Module
import styles from "./Experience.module.css";

export default function Experience() {
  const { t } = useTranslation();

  // Mapeia os IDs das empresas para as chaves de tradução
  const getTranslationKey = (company) => {
    const companyMap = {
      'Globo': 'globo',
      'Ducke: Excelência em Tecnologia': 'ducke',
      'Entregue Comércio e Serviços Ltda': 'entregue'
    };
    return companyMap[company] || 'globo';
  };

  return (
    <section id="experience" className={styles.experienceSection} aria-labelledby="experience-heading">
      <h2 id="experience-heading">{t('experience.title')}</h2>
      <div className={styles.timeline}>
        {profileData.experiences.map((exp) => {
          const translationKey = getTranslationKey(exp.company);
          return (
            <article key={`${exp.role}-${exp.period}`} className={styles.item}>
              <div className={styles.bulletWrapper} aria-hidden="true">
                <span className={styles.bullet} />
              </div>
              <div className={styles.content}>
                <header className={styles.header}>
                  <h3 className={styles.role}>{t(`experience.${translationKey}.role`)}</h3>
                  <a
                    href={exp.companyUrl}
                    target={exp.companyUrl.startsWith("#") ? undefined : "_blank"}
                    rel={exp.companyUrl.startsWith("#") ? undefined : "noopener noreferrer"}
                    className={styles.companyLink}
                  >
                    {exp.company}
                  </a>
                  <span className={styles.period}>
                    {exp.period.replace('Atual', t('experience.current'))}
                  </span>
                </header>
                <p className={styles.description}>{t(`experience.${translationKey}.description`)}</p>
                <div className={styles.techGroups}>
                  {Object.entries(exp.stacks).map(([groupName, tags]) => (
                    <div key={groupName} className={styles.group}>
                      <h4>{t(`experience.stacks.${groupName.toLowerCase()}`)}</h4>
                      <ul className={styles.tags}>
                        {tags.map(tag => (
                          <li key={tag} className={styles.tag}>{tag}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
