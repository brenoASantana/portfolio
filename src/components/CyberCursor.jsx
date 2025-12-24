import { useEffect, useState } from "react";
import styles from "./CyberCursor.module.css";

export default function CyberCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicking, setClicking] = useState(false);
  const [trailing, setTrailing] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Add trail
      setTrailing((prev) => {
        const newTrail = [
          ...prev,
          { x: e.clientX, y: e.clientY, id: Date.now() },
        ];
        return newTrail.slice(-8); // Keep only last 8 positions
      });
    };

    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);

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
            transform: `scale(${(index + 1) / trailing.length})`,
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
}
