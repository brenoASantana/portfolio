import type React from "react";
import { useTranslation } from "react-i18next";

// Data
import { useProfileData } from "../hooks/useProfileData";

// CSS
import styles from "./Skills.module.css";

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const profileData = useProfileData();

  return (
    <article className={styles.ul}>
      <div className={styles.skillsContainer}>
        <h2>{t("skills.title")}</h2>
        <div className={styles.paragraph}>
          {profileData.skills.map((skill) => (
            <p key={skill}>{skill}</p>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Skills;
