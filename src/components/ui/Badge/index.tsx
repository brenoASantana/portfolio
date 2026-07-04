import type React from "react";
import styles from "./Badge.module.css";
import type { BadgeProps } from "./types";

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
