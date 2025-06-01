import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Contact.module.css";

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.message) {
      setError(t("contact.errorRequired"));
      return;
    }

    try {
      // FormSubmit.co endpoint - sem backend necessário
      const response = await fetch("https://formspree.io/f/xvgodqad", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(t("contact.errorSubmit"));
      }
    } catch (err) {
      setError(t("contact.errorSubmit"));
      console.error("Form submission error:", err);
    }
  };

  return (
    <section
      id="contact"
      className={styles.contactSection}
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading">{t("contact.title")}</h2>

      <div className={styles.container}>
        <div className={styles.contentWrapper}>
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
                  onClick={() => {
                    navigator.clipboard.writeText(
                      "contatobrenosantana@outlook.com"
                    );
                    alert(t("contact.copied"));
                  }}
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

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">{t("contact.name")}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("contact.namePlaceholder")}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">{t("contact.emailLabel")}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("contact.emailPlaceholder")}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">{t("contact.message")}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("contact.messagePlaceholder")}
                rows="5"
                required
              />
            </div>

            {error && <div className={styles.error}>{error}</div>}
            {submitted && (
              <div className={styles.success}>{t("contact.success")}</div>
            )}

            <button type="submit" className={styles.submitButton}>
              {t("contact.send")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
