import type React from "react";

export type SkeletonVariant = "text" | "circle" | "rect" | "card";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: SkeletonVariant;
  width?: number | string;
  height?: number | string;
  count?: number;
}
