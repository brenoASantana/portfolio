import { useTranslation } from 'react-i18next';
import styles from './LanguageToggle.module.css';

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt-BR' ? 'en-US' : 'pt-BR';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const currentLanguage = i18n.language === 'pt-BR' ? 'pt-BR' : 'en-US';

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className={styles.toggleButton}
      aria-label={currentLanguage === 'pt-BR' ? 'Mudar para Inglês' : 'Switch to Portuguese'}
      title={currentLanguage === 'pt-BR' ? 'English' : 'Português'}
    >
      {currentLanguage === 'pt-BR' ? (
        // Bandeira dos EUA (Inglês)
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className={styles.flag} role="img" aria-label="US Flag">
          <title>US Flag</title>
          <clipPath id="s">
            <path d="M0,0 v30 h60 v-30 z"/>
          </clipPath>
          <clipPath id="t">
            <path d="M30,15 h30 v15 z v-15 h-30 z h-30 v15 z v-15 h30 z"/>
          </clipPath>
          <g clipPath="url(#s)">
            <path d="M0,0 v30 h60 v-30 z" fill="#bd3d44"/>
            <path d="M0,3.5 h60 M0,7 h60 M0,10.5 h60 M0,14 h60 M0,17.5 h60 M0,21 h60 M0,24.5 h60 M0,28 h60" stroke="#fff" strokeWidth="2.5"/>
            <path d="M0,0 v15 h30 v-15 z" fill="#192f5d"/>
          </g>
          <g fill="#fff">
            <g id="d">
              <g id="c">
                <g id="e">
                  <g id="b">
                    <path id="a" d="M3,1.5 l0.3,0.9 h0.9 l-0.7,0.5 l0.3,0.9 l-0.7-0.5 l-0.7,0.5 l0.3-0.9 l-0.7-0.5 h0.9 z"/>
                    <use xlinkHref="#a" y="6"/>
                  </g>
                  <use xlinkHref="#b" x="6"/>
                </g>
                <use xlinkHref="#e" x="12"/>
              </g>
              <use xlinkHref="#c" x="6" y="3"/>
            </g>
            <use xlinkHref="#d" y="6"/>
          </g>
        </svg>
      ) : (
        // Bandeira do Brasil (Português)
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className={styles.flag} role="img" aria-label="Brazilian Flag">
          <title>Brazilian Flag</title>
          <rect width="60" height="30" fill="#009b3a"/>
          <path d="M30,3 L54,15 L30,27 L6,15 Z" fill="#fedf00"/>
          <circle cx="30" cy="15" r="4.5" fill="#002776"/>
          <path d="M26,15 a4.5,4.5 0 0,0 8,0" fill="#fff"/>
        </svg>
      )}
      <span className={styles.langText}>
        {currentLanguage === 'pt-BR' ? 'EN' : 'PT'}
      </span>
    </button>
  );
}
