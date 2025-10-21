import { useTranslation } from "react-i18next";
import styles from "./Recommendations.module.css";

function Recommendations() {
  const { t } = useTranslation();

  const recommendations = t("recommendations.items", { returnObjects: true });

  return (
    <section className={styles.recommendations}>
      <h2>{t("recommendations.title")}</h2>

      <div className={styles.grid}>
        {recommendations.map((rec) => (
          <article key={rec.author} className={styles.card}>
            <div className={styles.header}>
              <div className={styles.authorInfo}>
                <h3>{rec.author}</h3>
                <p className={styles.role}>{rec.role}</p>
                <p className={styles.company}>{rec.company}</p>
                <p className={styles.relationship}>{rec.relationship}</p>
              </div>
            </div>

            <div className={styles.content}>
              <p className={styles.text}>{rec.text}</p>
            </div>

            <div className={styles.footer}>
              <time className={styles.date}>{rec.date}</time>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.viewAllContainer}>
        <a
          href="https://www.linkedin.com/in/brenoasantana/details/recommendations/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkedinButton}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-label="LinkedIn"
          >
            <title>LinkedIn</title>
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          <span>{t("recommendations.viewAllOnLinkedIn")}</span>
        </a>
      </div>
    </section>
  );
}

export default Recommendations;
