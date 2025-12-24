import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import CyberCursor from "./components/CyberCursor";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import LanguageToggle from "./components/LanguageToggle";
import PixelSnakeGame from "./components/PixelSnakeGame";
import Profile from "./components/Profile";
import RPGDashboard from "./components/RPGDashboard";
import Skills from "./components/Skills";
import SpotifyNowPlaying from "./components/SpotifyNowPlaying";

function App() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [spotifyLoaded, setSpotifyLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !spotifyLoaded) {
            setSpotifyLoaded(true);
          }
        }
      },
      { threshold: 0.1 }
    );

    const spotifyElement = document.getElementById("spotify-section");
    if (spotifyElement) {
      observer.observe(spotifyElement);
    }

    return () => observer.disconnect();
  }, [spotifyLoaded]);

  const handleNavClick = (targetId) => {
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <CyberCursor />
      <SpotifyNowPlaying />
      <LanguageToggle />

      <button
        type="button"
        className="mobileMenuToggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={mobileMenuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        aria-label="Navegação principal"
        className={mobileMenuOpen ? "navOpen" : ""}
      >
        <button
          type="button"
          className="navLink"
          onClick={() => handleNavClick("#top")}
        >
          {t("nav.home")}
        </button>
        <button
          type="button"
          className="navLink"
          onClick={() => handleNavClick("#about")}
        >
          {t("nav.about")}
        </button>
        <button
          type="button"
          className="navLink"
          onClick={() => handleNavClick("#skills")}
        >
          {t("nav.skills")}
        </button>
        <button
          type="button"
          className="navLink"
          onClick={() => handleNavClick("#experience")}
        >
          {t("nav.experience")}
        </button>
        <button
          type="button"
          className="navLink"
          onClick={() => handleNavClick("#game")}
        >
          {t("nav.game") || "Game"}
        </button>
        <button
          type="button"
          className="navLink"
          onClick={() => handleNavClick("#contact")}
        >
          {t("nav.contact")}
        </button>
      </nav>

      <main id="top">
        <Profile />

        <RPGDashboard />

        <section id="spotify-section">
          {spotifyLoaded && (
            <>
              <h2
                style={{
                  textAlign: "center",
                  marginBottom: "1rem",
                  fontFamily: '"Press Start 2P", monospace',
                  fontSize: "1.2rem",
                  color: "var(--accent-primary)",
                  textShadow: "0 0 10px rgba(194, 0, 251, 0.6)",
                }}
              >
                🎵{" "}
                {t("spotify.favoritePlaylist") ||
                  "Minha Playlist Favorita do Momento"}
              </h2>
              <iframe
                data-testid="embed-iframe"
                title="Spotify Playlist"
                style={{
                  borderRadius: "12px",
                  maxWidth: "100%",
                  height: "auto",
                  minHeight: "352px",
                }}
                src="https://open.spotify.com/embed/playlist/6FVmv2a8ioXWCy74rPI6Do?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </>
          )}
        </section>

        <section id="about" className="aboutSkills">
          <div className="aboutSkillsContainer">
            <About />

            <div id="skills">
              <Skills />
            </div>
          </div>
        </section>

        <Experience />

        {/* Pixel Snake Game */}
        <section id="game">
          <PixelSnakeGame />
        </section>

        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
