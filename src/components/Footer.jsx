// React
import { useTranslation } from "react-i18next";

// Icons
import emailIcon from "../assets/icons/social/email.svg";
import githubIcon from "../assets/icons/social/github.svg";
import instagramIcon from "../assets/icons/social/instagram.svg";
import linkedinIcon from "../assets/icons/social/linkedin.svg";
import linktreeIcon from "../assets/icons/social/linktree.svg";

// CSS Module
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useTranslation();

  const socialLinks = [
    {
      href: "https://instagram.com/brenoasantana",
      label: "Instagram",
      icon: instagramIcon,
    },
    {
      href: "https://linkedin.com/in/brenoasantana",
      label: "LinkedIn",
      icon: linkedinIcon,
    },
    {
      href: "https://github.com/brenoasantana",
      label: "GitHub",
      icon: githubIcon,
    },
    {
      href: "mailto:contatobrenosantana@outlook.com",
      label: "E-mail",
      icon: emailIcon,
    },
    {
      href: "https://linktr.ee/brenoasantana",
      label: "Linktree",
      icon: linktreeIcon,
    },
  ];

  return (
    <footer className={styles.footer}>
      <h2>{t("footer.title")}</h2>

      <div className={styles.socialLinks}>
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel={
              link.href.startsWith("mailto") ? undefined : "noopener noreferrer"
            }
            title={link.label}
            className={styles.socialLink}
          >
            <img src={link.icon} alt={link.label} />
          </a>
        ))}
      </div>

      <p>{t("footer.copyright").replace("2025", new Date().getFullYear())}</p>
    </footer>
  );
}
