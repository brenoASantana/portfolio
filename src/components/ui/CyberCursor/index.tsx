import type React from "react";
import { useEffect, useState } from "react";
import styles from "./CyberCursor.module.css";

interface Position {
  x: number;
  y: number;
}

interface TrailPoint extends Position {
  id: string;
}

const CyberCursor: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [clicking, setClicking] = useState<boolean>(false);
  const [trailing, setTrailing] = useState<TrailPoint[]>([]);

  useEffect(() => {
    let trailCounter = 0;

    const handleMouseMove = (e: MouseEvent): void => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Add trail
      setTrailing((prev) => {
        const newTrail: TrailPoint[] = [
          ...prev,
          { x: e.clientX, y: e.clientY, id: `${Date.now()}-${trailCounter++}` },
        ];
        return newTrail.slice(-8); // Keep only last 8 positions
      });
    };

    const handleMouseDown = (): void => setClicking(true);
    const handleMouseUp = (): void => setClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Trailing effect */}
      {trailing.map((point, index) => (
        <div
          key={point.id}
          className={styles.trail}
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            opacity: (index + 1) / trailing.length,
            transform: `translate(-50%, -50%) scale(${(index + 1) / trailing.length})`,
          }}
        />
      ))}

      {/* Main cursor */}
      <div
        className={`${styles.cursor} ${clicking ? styles.clicking : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div className={styles.cursorInner} />
        <div className={styles.cursorRing} />
      </div>
    </>
  );
};

export default CyberCursor;
