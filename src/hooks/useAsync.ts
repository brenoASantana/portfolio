import { useCallback, useEffect, useRef, useState } from "react";

export interface UseAsyncOptions {
    skip?: boolean;
    onSuccess?: (data: unknown) => void;
    onError?: (error: Error) => void;
}

export interface UseAsyncReturn<T> {
    data: T | null;
    error: Error | null;
    isLoading: boolean;
    isSuccess: boolean;
    refetch: () => void;
}

export const useAsync = <T>(
    asyncFn: () => Promise<T>,
    dependencies: React.DependencyList = [],
    options: UseAsyncOptions = {},
): UseAsyncReturn<T> => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);
    const isMountedRef = useRef(true);
    const optionsRef = useRef(options);

    // Update ref when options change, but don't trigger re-execution
    optionsRef.current = options;

    const executeAsync = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        setIsSuccess(false);

        try {
            const result = await asyncFn();
            if (isMountedRef.current) {
                setData(result);
                setIsSuccess(true);
                optionsRef.current.onSuccess?.(result);
            }
        } catch (err) {
            const error = err instanceof Error ? err : new Error(String(err));
            if (isMountedRef.current) {
                setError(error);
                setIsSuccess(false);
                optionsRef.current.onError?.(error);
            }
        } finally {
            if (isMountedRef.current) {
                setIsLoading(false);
            }
        }
    }, [asyncFn]);

    useEffect(() => {
        if (options.skip) return;
        executeAsync();
    }, [executeAsync, options.skip, ...dependencies]);

    useEffect(() => {
        return () => {
            isMountedRef.current = false;
        };
    }, []);

    return {
        data,
        error,
        isLoading,
        isSuccess,
        refetch: executeAsync,
    };
};
