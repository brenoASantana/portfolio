import React from "react";
import styles from "./Skeleton.module.css";
import { SkeletonProps } from "./types";

const Skeleton: React.FC<SkeletonProps> = ({
    variant = "text",
    width = "100%",
    height = "1rem",
    count = 1,
    className,
    ...props
}) => {
    const widthValue = typeof width === "number" ? `${width}px` : width;
    const heightValue = typeof height === "number" ? `${height}px` : height;

    const skeletonClasses = [styles.skeleton, styles[variant], className]
        .filter(Boolean)
        .join(" ");

    const skeletons = Array.from({ length: count }).map((_, index) => (
        <div
            key={index}
            className={skeletonClasses}
            style={{
                width: widthValue,
                height: heightValue,
                ...(variant === "circle" && { borderRadius: "50%" }),
            }}
            {...props}
        />
    ));

    return <>{skeletons}</>;
};

export default Skeleton;
