// React
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import LanguageToggle from "./components/LanguageToggle";
import Profile from "./components/Profile";
import Skills from "./components/Skills";

// New Cyberpunk Components
import CyberCursor from "./components/CyberCursor";
import PixelSnakeGame from "./components/PixelSnakeGame";
import RPGDashboard from "./components/RPGDashboard";
import SpotifyNowPlaying from "./components/SpotifyNowPlaying";

// CSS
import "./App.css";

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

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Cyberpunk Cursor */}
      <CyberCursor />

      {/* Floating Components */}
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
        <a href="#top" onClick={handleNavClick}>
          {t("nav.home")}
        </a>
        <a href="#about" onClick={handleNavClick}>
          {t("nav.about")}
        </a>
        <a href="#skills" onClick={handleNavClick}>
          {t("nav.skills")}
        </a>
        <a href="#experience" onClick={handleNavClick}>
          {t("nav.experience")}
        </a>
        <a href="#game" onClick={handleNavClick}>
          {t("nav.game") || "Game"}
        </a>
        <a href="#contact" onClick={handleNavClick}>
          {t("nav.contact")}
        </a>
      </nav>

      <main id="top">
        <Profile />

        {/* RPG Dashboard */}
        <RPGDashboard />

        {/* Spotify Playlist Section */}
        <section id="spotify-section">
          {spotifyLoaded && (
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
