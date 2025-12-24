import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./PixelSnakeGame.module.css";

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };
const INITIAL_SPEED = 150;

export default function PixelSnakeGame() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    return Number.parseInt(localStorage.getItem("snakeHighScore") || "0");
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(INITIAL_SPEED);
  const directionRef = useRef(direction);

  const generateFood = useCallback((currentSnake) => {
    const getRandomPosition = () => ({
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    });

    const isPositionOccupied = (position) => {
      return currentSnake.some(
        (segment) => segment.x === position.x && segment.y === position.y
      );
    };

    let newFood = getRandomPosition();
    while (isPositionOccupied(newFood)) {
      newFood = getRandomPosition();
    }

    return newFood;
  }, []);

  const resetGame = useCallback(() => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    directionRef.current = INITIAL_DIRECTION;
    setFood(generateFood(INITIAL_SNAKE));
    setGameOver(false);
    setScore(0);
    setSpeed(INITIAL_SPEED);
    setIsPlaying(true);
  }, [generateFood]);

  const moveSnake = useCallback(() => {
    if (gameOver || !isPlaying) return;

    setSnake((prevSnake) => {
      const head = prevSnake[0];
      const newHead = {
        x: head.x + directionRef.current.x,
        y: head.y + directionRef.current.y,
      };

      // Check wall collision
      if (
        newHead.x < 0 ||
        newHead.x >= GRID_SIZE ||
        newHead.y < 0 ||
        newHead.y >= GRID_SIZE
      ) {
        setGameOver(true);
        setIsPlaying(false);
        return prevSnake;
      }

      // Check self collision
      if (
        prevSnake.some(
          (segment) => segment.x === newHead.x && segment.y === newHead.y
        )
      ) {
        setGameOver(true);
        setIsPlaying(false);
        return prevSnake;
      }

      const newSnake = [newHead, ...prevSnake];

      // Check food collision
      if (newHead.x === food.x && newHead.y === food.y) {
        setScore((prev) => {
          const newScore = prev + 10;
          if (newScore > highScore) {
            setHighScore(newScore);
            localStorage.setItem("snakeHighScore", newScore.toString());
          }
          return newScore;
        });
        setFood(generateFood(newSnake));
        setSpeed((prev) => Math.max(50, prev - 5));
        return newSnake;
      }

      return newSnake.slice(0, -1);
    });
  }, [gameOver, isPlaying, food, highScore, generateFood]);

  useEffect(() => {
    directionRef.current = direction;
  }, [direction]);

  useEffect(() => {
    if (!isPlaying) return;

    const gameLoop = setInterval(moveSnake, speed);
    return () => clearInterval(gameLoop);
  }, [moveSnake, speed, isPlaying]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isPlaying && !gameOver) return;

      const { key } = e;
      const currentDir = directionRef.current;

      if (
        (key === "ArrowUp" || key === "w" || key === "W") &&
        currentDir.y === 0
      ) {
        e.preventDefault();
        setDirection({ x: 0, y: -1 });
      } else if (
        (key === "ArrowDown" || key === "s" || key === "S") &&
        currentDir.y === 0
      ) {
        e.preventDefault();
        setDirection({ x: 0, y: 1 });
      } else if (
        (key === "ArrowLeft" || key === "a" || key === "A") &&
        currentDir.x === 0
      ) {
        e.preventDefault();
        setDirection({ x: -1, y: 0 });
      } else if (
        (key === "ArrowRight" || key === "d" || key === "D") &&
        currentDir.x === 0
      ) {
        e.preventDefault();
        setDirection({ x: 1, y: 0 });
      } else if (key === " " || key === "Enter") {
        e.preventDefault();
        if (gameOver) {
          resetGame();
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isPlaying, gameOver, resetGame]);

  return (
    <section className={styles.gameSection}>
      <div className={styles.gameContainer}>
        <div className={styles.gameHeader}>
          <h2 className={styles.gameTitle}>
            <span className={styles.glitchText}>CYBER</span> SNAKE
          </h2>
          <div className={styles.scoreBoard}>
            <div className={styles.scoreItem}>
              <span className={styles.label}>SCORE:</span>
              <span className={styles.value}>
                {score.toString().padStart(4, "0")}
              </span>
            </div>
            <div className={styles.scoreItem}>
              <span className={styles.label}>HIGH:</span>
              <span className={styles.value}>
                {highScore.toString().padStart(4, "0")}
              </span>
            </div>
          </div>
        </div>

        <div className={styles.gameWrapper}>
          <div
            className={styles.gameBoard}
            style={{
              width: GRID_SIZE * CELL_SIZE,
              height: GRID_SIZE * CELL_SIZE,
            }}
          >
            {/* Grid lines */}
            <div className={styles.gridLines}>
              {Array.from({ length: GRID_SIZE + 1 }).map((_, i) => (
                <div
                  key={`v-${i}`}
                  className={styles.verticalLine}
                  style={{ left: i * CELL_SIZE }}
                />
              ))}
              {Array.from({ length: GRID_SIZE + 1 }).map((_, i) => (
                <div
                  key={`h-${i}`}
                  className={styles.horizontalLine}
                  style={{ top: i * CELL_SIZE }}
                />
              ))}
            </div>

            {/* Snake */}
            {snake.map((segment, index) => (
              <div
                key={`snake-${index}`}
                className={`${styles.snakeSegment} ${
                  index === 0 ? styles.snakeHead : ""
                }`}
                style={{
                  left: segment.x * CELL_SIZE,
                  top: segment.y * CELL_SIZE,
                  width: CELL_SIZE,
                  height: CELL_SIZE,
                }}
              />
            ))}

            {/* Food */}
            <div
              className={styles.food}
              style={{
                left: food.x * CELL_SIZE,
                top: food.y * CELL_SIZE,
                width: CELL_SIZE,
                height: CELL_SIZE,
              }}
            />

            {/* Game Over Overlay */}
            {gameOver && (
              <div className={styles.gameOverlay}>
                <div className={styles.gameOverContent}>
                  <h3 className={styles.gameOverTitle}>GAME OVER</h3>
                  <p className={styles.finalScore}>SCORE: {score}</p>
                  {score === highScore && score > 0 && (
                    <p className={styles.newRecord}>NEW RECORD! 🏆</p>
                  )}
                  <button
                    type="button"
                    className={styles.restartButton}
                    onClick={resetGame}
                  >
                    PRESS START
                  </button>
                </div>
              </div>
            )}

            {/* Start Screen */}
            {!isPlaying && !gameOver && (
              <div className={styles.gameOverlay}>
                <div className={styles.gameOverContent}>
                  <h3 className={styles.startTitle}>READY PLAYER ONE</h3>
                  <div className={styles.controls}>
                    <p>USE ARROW KEYS OR WASD</p>
                    <div className={styles.keyboardGuide}>
                      <div className={styles.keyRow}>
                        <div className={styles.key}>↑</div>
                      </div>
                      <div className={styles.keyRow}>
                        <div className={styles.key}>←</div>
                        <div className={styles.key}>↓</div>
                        <div className={styles.key}>→</div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className={styles.startButton}
                    onClick={resetGame}
                  >
                    INSERT COIN
                  </button>
                </div>
              </div>
            )}

            <div className={styles.scanlineEffect} />
          </div>

          <div className={styles.gameInfo}>
            <div className={styles.infoBox}>
              <h3>HOW TO PLAY</h3>
              <ul>
                <li>Use setas ou WASD para mover</li>
                <li>Coma a comida (🟣) para crescer</li>
                <li>Não bata nas paredes</li>
                <li>Não morda você mesmo</li>
                <li>Cada comida = +10 pontos</li>
                <li>Velocidade aumenta conforme você joga</li>
              </ul>
            </div>
            <div className={styles.arcadeFrame}>
              <div className={styles.arcadeLight} />
              <div className={styles.arcadeLight} />
              <div className={styles.arcadeLight} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
