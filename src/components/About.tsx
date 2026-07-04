import React from "react";
import { useTranslation } from "react-i18next";

// CSS
import styles from "./About.module.css";

const About: React.FC = () => {
    const { t } = useTranslation();

    return (
        <article className={styles.about}>
            <h2>{t("about.title")}</h2>
            <p>{t("about.paragraph1")}</p>
            <p>{t("about.paragraph2")}</p>
            <p>{t("about.paragraph3")}</p>
            <p>{t("about.paragraph4")}</p>
        </article>
    );
};

export default About;
