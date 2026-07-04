import React from "react";
import { BadgeProps } from "./types";
import styles from "./Badge.module.css";

const Badge: React.FC<BadgeProps> = ({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}) => {
  const badgeClasses = [styles.badge, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={badgeClasses} {...props}>
      {children}
    </span>
  );
};

export default Badge;
