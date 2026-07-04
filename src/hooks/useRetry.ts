import { useCallback, useRef, useState } from "react";

export interface UseRetryOptions {
    maxRetries?: number;
    delayMs?: number;
    backoffMultiplier?: number;
    onRetry?: (attempt: number, error: Error) => void;
    onError?: (error: Error) => void;
    onSuccess?: () => void;
}

export interface UseRetryReturn<T> {
    data: T | null;
    error: Error | null;
    isLoading: boolean;
    retry: (fn: () => Promise<T>) => Promise<T | null>;
    reset: () => void;
}

export const useRetry = <T,>({
    maxRetries = 3,
    delayMs = 1000,
    backoffMultiplier = 2,
    onRetry,
    onError,
    onSuccess,
}: UseRetryOptions = {}): UseRetryReturn<T> => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const attemptsRef = useRef(0);

    const retry = useCallback(
        async (fn: () => Promise<T>): Promise<T | null> => {
            setIsLoading(true);
            setError(null);
            let lastError: Error = new Error("Unknown error");

            for (let attempt = 0; attempt < maxRetries; attempt++) {
                try {
                    attemptsRef.current = attempt + 1;
                    const result = await fn();
                    setData(result);
                    setIsLoading(false);
                    onSuccess?.();
                    return result;
                } catch (err) {
                    lastError = err instanceof Error ? err : new Error(String(err));

                    if (attempt < maxRetries - 1) {
                        onRetry?.(attempt + 1, lastError);
                        const delay = delayMs * Math.pow(backoffMultiplier, attempt);
                        await new Promise((resolve) => setTimeout(resolve, delay));
                    }
                }
            }

            setError(lastError);
            setIsLoading(false);
            onError?.(lastError);
            return null;
        },
        [maxRetries, delayMs, backoffMultiplier, onRetry, onError, onSuccess]
    );

    const reset = useCallback(() => {
        setData(null);
        setError(null);
        setIsLoading(false);
        attemptsRef.current = 0;
    }, []);

    return {
        data,
        error,
        isLoading,
        retry,
        reset,
    };
};
