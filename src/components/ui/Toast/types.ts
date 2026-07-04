import type { ToastType } from "../../../context/ToastContext";

export interface ToastProps {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
  onClose: () => void;
}
