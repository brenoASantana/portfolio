import type React from "react";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Contact.module.css";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  const handleEmailCopy = useCallback((): void => {
    const email = "contatobrenosantana@outlook.com";
    navigator.clipboard.writeText(email);
    alert(t("contact.copied"));
  }, [t]);

  return (
    <section
      id="contact"
      className={styles.contactSection}
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading">{t("contact.title")}</h2>

      <div className={styles.container}>
        <div className={styles.info}>
          <h3>{t("contact.subtitle")}</h3>
          <p>{t("contact.description")}</p>

          <div className={styles.methods}>
            <div className={styles.method}>
              <h4>{t("contact.email")}</h4>
              <a
                href="mailto:contatobrenosantana@outlook.com"
                className={styles.emailLink}
              >
                contatobrenosantana@outlook.com
              </a>
              <button
                type="button"
                className={styles.copyButton}
                onClick={handleEmailCopy}
                aria-label="Copy email to clipboard"
              >
                📋 {t("contact.copy")}
              </button>
            </div>

            <div className={styles.method}>
              <h4>{t("contact.linkedIn")}</h4>
              <a
                href="https://linkedin.com/in/brenoasantana"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                linkedin.com/in/brenoasantana
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
