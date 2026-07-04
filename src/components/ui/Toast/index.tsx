import React, { useEffect } from "react";
import styles from "./Toast.module.css";
import { ToastProps } from "./types";

const ToastComponent: React.FC<ToastProps> = ({ message, type, onClose, duration = 3000 }) => {
    useEffect(() => {
        if (duration > 0) {
            const timer = setTimeout(onClose, duration);
            return () => clearTimeout(timer);
        }
    }, [duration, onClose]);

    const iconMap: Record<string, string> = {
        success: "✓",
        error: "✕",
        warning: "⚠",
        info: "ℹ",
    };

    return (
        <div className={`${styles.toast} ${styles[type]}`} role="alert">
            <span className={styles.icon}>{iconMap[type]}</span>
            <p className={styles.message}>{message}</p>
            <button
                className={styles.closeButton}
                onClick={onClose}
                aria-label="Fechar notificação"
            >
                ✕
            </button>
        </div>
    );
};

export default ToastComponent;
