import React, { type ErrorInfo } from "react";
import styles from "./ErrorBoundary.module.css";
import type { ErrorBoundaryProps, ErrorBoundaryState } from "./types";

class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
        };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return {
            hasError: true,
            error,
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("ErrorBoundary caught:", error, errorInfo);
    }

    handleReset = () => {
        this.setState({
            hasError: false,
            error: null,
        });
    };

    render() {
        if (this.state.hasError && this.state.error) {
            if (this.props.fallback) {
                return this.props.fallback(this.state.error, this.handleReset);
            }

            return (
                <div className={styles.errorContainer}>
                    <div className={styles.errorBox}>
                        <h2 className={styles.errorTitle}>⚠️ Erro Detectado</h2>
                        <p className={styles.errorMessage}>{this.state.error.message}</p>
                        <details className={styles.errorDetails}>
                            <summary>Detalhes Técnicos</summary>
                            <pre className={styles.errorStack}>{this.state.error.stack}</pre>
                        </details>
                        <button type="button" onClick={this.handleReset} className={styles.resetButton}>
                            Tentar Novamente
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
