import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getNowPlaying } from "../services/spotify";
import styles from "./SpotifyNowPlaying.module.css";

export default function SpotifyNowPlaying() {
  const { t } = useTranslation();
  const [nowPlaying, setNowPlaying] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const data = await getNowPlaying();

        if (data.isPlaying) {
          setNowPlaying({
            song: data.title,
            artist: data.artist,
            album: data.album,
            albumArt: data.albumImageUrl,
            songUrl: data.songUrl,
            progress: data.progress,
            duration: data.duration,
          });
          setIsPlaying(true);
        } else {
          // Fallback para dados mockados se não estiver tocando
          setNowPlaying({
            song: "Not Playing",
            artist: "Spotify",
            album: "No music playing",
            albumArt: "https://via.placeholder.com/100/8000b3/c200fb?text=OFF",
            progress: 0,
            duration: 240000,
          });
          setIsPlaying(false);
        }
      } catch (error) {
        console.error("Error fetching Spotify data:", error);
        // Fallback para dados mockados em caso de erro
        setNowPlaying({
          song: "Cyberpunk Dreams",
          artist: "Neon Synthwave",
          album: "Digital Horizons",
          albumArt: "https://via.placeholder.com/100/8000b3/c200fb?text=NOW",
          progress: 0,
          duration: 240000,
        });
        setIsPlaying(true);
      }
    };

    // Buscar agora
    fetchNowPlaying();

    // Atualizar a cada 5 segundos
    const interval = setInterval(fetchNowPlaying, 5000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds.padStart(2, "0")}`;
  };

  if (!nowPlaying) return null;

  const progressPercent = (nowPlaying.progress / nowPlaying.duration) * 100;

  return (
    <>
      {/* Botão flutuante */}
      <button
        type="button"
        className={styles.floatingButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Spotify widget"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          role="img"
        >
          <title>Spotify logo</title>
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
      </button>

      {/* Widget que abre/fecha */}
      {isOpen && (
        <div className={styles.nowPlaying}>
          <div className={styles.header}>
            <span className={styles.pulse}>●</span>
            <span className={styles.title}>
              {t("spotify.nowPlaying") || "NOW PLAYING"}
            </span>
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          {isPlaying ? (
            <div className={styles.content}>
              <div className={styles.albumArt}>
                <img src={nowPlaying.albumArt} alt="Album cover" />
                <div className={styles.vinylSpin} />
              </div>

              <div className={styles.info}>
                <div className={styles.marquee}>
                  <span className={styles.song}>{nowPlaying.song}</span>
                </div>
                <div className={styles.artist}>{nowPlaying.artist}</div>

                <div className={styles.progressContainer}>
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progressFill}
                      style={{ width: `${progressPercent}%` }}
                    />
                    <div className={styles.pixelGrid} />
                  </div>
                  <div className={styles.timeDisplay}>
                    <span>{formatTime(nowPlaying.progress)}</span>
                    <span>{formatTime(nowPlaying.duration)}</span>
                  </div>
                </div>

                <div className={styles.equalizer}>
                  <span className={styles.bar} />
                  <span className={styles.bar} />
                  <span className={styles.bar} />
                  <span className={styles.bar} />
                  <span className={styles.bar} />
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.notPlaying}>
              <div className={styles.pauseIcon}>
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  role="img"
                  aria-label="Not playing"
                >
                  <title>Not playing</title>
                  <circle cx="12" cy="12" r="10" />
                  <line x1="10" y1="15" x2="10" y2="9" />
                  <line x1="14" y1="15" x2="14" y2="9" />
                </svg>
              </div>
              <p className={styles.notPlayingText}>
                {t("spotify.notPlaying") || "Nenhuma música tocando no momento"}
              </p>
              <p className={styles.notPlayingHint}>
                {t("spotify.notPlayingHint") ||
                  "Abra o Spotify e comece a ouvir!"}
              </p>
            </div>
          )}

          <div className={styles.scanline} />
        </div>
      )}
    </>
  );
}
