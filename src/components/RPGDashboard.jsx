import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getGitHubStats, getRecentActivity } from "../services/github";
import styles from "./RPGDashboard.module.css";

export default function RPGDashboard() {
  const { t } = useTranslation();
  const [stats, setStats] = useState({
    level: 0,
    experience: 0,
    nextLevel: 100,
    codingStreak: 0,
    linesOfCode: 0,
    coffeeConsumed: 0,
    bugsFixed: 0,
  });
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const [githubStats, activity] = await Promise.all([
          getGitHubStats(),
          getRecentActivity(),
        ]);

        // Calcular idade
        const birthDate = new Date(2005, 3, 6);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (
          monthDiff < 0 ||
          (monthDiff === 0 && today.getDate() < birthDate.getDate())
        ) {
          age--;
        }

        // Mapear linguagens do GitHub para skills com cores
        const languageColors = {
          JavaScript: "#f7df1e",
          TypeScript: "#3178c6",
          React: "#61dafb",
          Java: "#007396",
          Python: "#3776ab",
          HTML: "#e34c26",
          CSS: "#563d7c",
          Shell: "#89e051",
          Dockerfile: "#384d54",
          Makefile: "#427819",
        };

        if (githubStats?.topLanguages) {
          const totalRepos = githubStats.totalRepos;
          const githubSkills = githubStats.topLanguages.map((lang) => ({
            name: lang.name,
            level: Math.min(Math.round((lang.count / totalRepos) * 100), 95),
            color: languageColors[lang.name] || "#00ff41",
          }));
          setSkills(githubSkills);
        }

        // Stats baseados em dados reais do GitHub
        const targetStats = {
          level: age,
          experience: githubStats?.totalStars * 100 || 3200,
          nextLevel: 5000,
          codingStreak: activity?.activeDays || 42,
          linesOfCode: activity?.recentCommits * 50 || 48000,
          coffeeConsumed: Math.floor(activity?.activeDays * 2.5) || 287,
          bugsFixed: githubStats?.totalRepos * 15 || 534,
        };

        const animateStats = (key, target, duration = 2000) => {
          const start = 0;
          const increment = target / (duration / 50);
          let current = start;

          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(interval);
            }
            setStats((prev) => ({ ...prev, [key]: Math.floor(current) }));
          }, 50);
        };

        setTimeout(() => {
          for (const [key, value] of Object.entries(targetStats)) {
            animateStats(key, value);
          }
        }, 500);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
        // Fallback para valores estáticos
        const birthDate = new Date(2005, 3, 6);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (
          monthDiff < 0 ||
          (monthDiff === 0 && today.getDate() < birthDate.getDate())
        ) {
          age--;
        }

        const fallbackStats = {
          level: age,
          experience: 3200,
          nextLevel: 5000,
          codingStreak: 42,
          linesOfCode: 48000,
          coffeeConsumed: 287,
          bugsFixed: 534,
        };

        setStats(fallbackStats);
        setSkills([
          { name: "JavaScript", level: 85, color: "#f7df1e" },
          { name: "React", level: 82, color: "#61dafb" },
          { name: "Java", level: 78, color: "#007396" },
          { name: "PostgreSQL", level: 75, color: "#336791" },
          { name: "Node.js", level: 70, color: "#339933" },
          { name: "Python", level: 65, color: "#3776ab" },
          { name: "Git/GitHub", level: 80, color: "#f05032" },
          { name: "AWS", level: 60, color: "#ff9900" },
        ]);
      }
    };

    fetchGitHubData();
  }, []);

  const experiencePercent = (stats.experience / stats.nextLevel) * 100;

  return (
    <section className={styles.dashboardSection}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>
          <span className={styles.pixel}>▲</span> {t("rpg.title")}{" "}
          <span className={styles.pixel}>▲</span>
        </h2>

        <div className={styles.grid}>
          {/* Character Card */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>{t("rpg.characterInfo")}</h3>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.avatar}>
                <div className={styles.avatarFrame}>
                  <img
                    src="https://github.com/brenoASantana.png"
                    alt="Developer Avatar"
                  />
                </div>
                <div className={styles.levelBadge}>
                  <span className={styles.levelText}>LVL</span>
                  <span className={styles.levelNumber}>{stats.level}</span>
                </div>
              </div>
              <div className={styles.characterInfo}>
                <p className={styles.name}>BRENO SANTANA</p>
                <p className={styles.class}>{t("rpg.class")}</p>
                <div className={styles.xpBar}>
                  <div className={styles.xpLabel}>
                    <span>XP</span>
                    <span>
                      {stats.experience.toLocaleString()} /{" "}
                      {stats.nextLevel.toLocaleString()}
                    </span>
                  </div>
                  <div className={styles.xpProgress}>
                    <div
                      className={styles.xpFill}
                      style={{ width: `${experiencePercent}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>{t("rpg.statistics")}</h3>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.statGrid}>
                <div className={styles.statItem}>
                  <div className={styles.statIcon}>🔥</div>
                  <div className={styles.statInfo}>
                    <span className={styles.statValue}>
                      {stats.codingStreak}
                    </span>
                    <span className={styles.statLabel}>
                      {t("rpg.daysStreak")}
                    </span>
                  </div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statIcon}>💻</div>
                  <div className={styles.statInfo}>
                    <span className={styles.statValue}>
                      {(stats.linesOfCode / 1000).toFixed(1)}K
                    </span>
                    <span className={styles.statLabel}>
                      {t("rpg.linesOfCode")}
                    </span>
                  </div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statIcon}>☕</div>
                  <div className={styles.statInfo}>
                    <span className={styles.statValue}>
                      {stats.coffeeConsumed}
                    </span>
                    <span className={styles.statLabel}>
                      {t("rpg.coffeeCups")}
                    </span>
                  </div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statIcon}>🐛</div>
                  <div className={styles.statInfo}>
                    <span className={styles.statValue}>
                      {stats.bugsFixed.toLocaleString()}
                    </span>
                    <span className={styles.statLabel}>
                      {t("rpg.bugsFixed")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Card */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>{t("rpg.skillTree")}</h3>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.skillsList}>
                {skills.map((skill) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.skillBar}>
                      <div
                        className={styles.skillFill}
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                          boxShadow: `0 0 10px ${skill.color}`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.scanline} />
      </div>
    </section>
  );
}
