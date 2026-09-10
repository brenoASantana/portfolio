import type React from "react";
import { useTranslation } from "react-i18next";

import { useProfileData } from "../hooks/useProfileData";
import styles from "./Education.module.css";

const Education: React.FC = () => {
    const { t } = useTranslation();
    const profileData = useProfileData();

    return (
        <section
            id="education"
            className={styles.educationSection}
            aria-labelledby="education-heading"
        >
            <div className={styles.column}>
                <h2 id="education-heading">{t("education.title")}</h2>
                <div className={styles.entries}>
                    {profileData.education.map((item) => (
                        <article key={`${item.institution}-${item.degree}`} className={styles.entry}>
                            <h3>{item.degreeKey ? t(item.degreeKey) : item.degree}</h3>
                            <p>{item.institution}</p>
                            <span>{item.periodKey ? t(item.periodKey) : item.period}</span>
                        </article>
                    ))}
                </div>
            </div>

            <div className={styles.column}>
                <h2>{t("education.languages")}</h2>
                <div className={styles.entries}>
                    {profileData.languages.map((language) => (
                        <article key={language.name} className={styles.entry}>
                            <h3>{language.nameKey ? t(language.nameKey) : language.name}</h3>
                            <span>
                                {language.proficiencyKey
                                    ? t(language.proficiencyKey)
                                    : language.proficiency}
                            </span>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
