// React
import { useTranslation } from "react-i18next";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import LanguageToggle from "./components/LanguageToggle";
import OngoingProjects from "./components/OngoingProjects";
import Participations from "./components/Participations";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Recommendations from "./components/Recommendations";
import SimpleProjects from "./components/SimpleProjects";
import Skills from "./components/Skills";

// CSS
import "./App.css";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <LanguageToggle />

      <nav aria-label="Navegação principal">
        <a href="#top">Início</a>
        <a href="#about">{t("nav.about")}</a>
        <a href="#skills">{t("nav.skills")}</a>
        <a href="#experience">{t("nav.experience")}</a>
        <a href="#projects">{t("nav.projects")}</a>
        <a href="#simple-projects">{t("nav.simpleProjects")}</a>
        <a href="#participations">{t("nav.participations")}</a>
        <a href="#recommendations">{t("nav.recommendations")}</a>
        <a href="#contact">{t("nav.contact")}</a>
      </nav>

      <main id="top">
        <Profile />
        <iframe
          data-testid="embed-iframe"
          title="Spotify Playlist"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/6FVmv2a8ioXWCy74rPI6Do?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
        <section id="about" className="aboutSkills">
          <div className="aboutSkillsContainer">
            <About />

            <div id="skills">
              <Skills />
            </div>
          </div>
        </section>

        <Experience />

        <section id="projects">
          <Projects />
          <OngoingProjects />
        </section>

        <section id="simple-projects">
          <SimpleProjects />
        </section>

        <section id="participations">
          <Participations />
        </section>

        <section id="recommendations">
          <Recommendations />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
