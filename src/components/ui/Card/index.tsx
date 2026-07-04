import React from "react";
import { CardProps } from "./types";
import styles from "./Card.module.css";

const Card: React.FC<CardProps> = ({ header, children, footer, className, ...props }) => {
  return (
    <div className={`${styles.card} ${className || ""}`} {...props}>
      {header && <div className={styles.header}>{header}</div>}
      <div className={styles.content}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};

export default Card;
