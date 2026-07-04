import { useEffect, useRef, useState } from "react";

export interface UseAsyncOptions {
    skip?: boolean;
    onSuccess?: (data: any) => void;
    onError?: (error: Error) => void;
}

export interface UseAsyncReturn<T> {
    data: T | null;
    error: Error | null;
    isLoading: boolean;
    isSuccess: boolean;
    refetch: () => void;
}

export const useAsync = <T,>(
    asyncFn: () => Promise<T>,
    dependencies: React.DependencyList = [],
    options: UseAsyncOptions = {}
): UseAsyncReturn<T> => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);
    const isMountedRef = useRef(true);

    const execute = async () => {
        setIsLoading(true);
        setError(null);
        setIsSuccess(false);

        try {
            const result = await asyncFn();
            if (isMountedRef.current) {
                setData(result);
                setIsSuccess(true);
                options.onSuccess?.(result);
            }
        } catch (err) {
            const error = err instanceof Error ? err : new Error(String(err));
            if (isMountedRef.current) {
                setError(error);
                setIsSuccess(false);
                options.onError?.(error);
            }
        } finally {
            if (isMountedRef.current) {
                setIsLoading(false);
            }
        }
    };

    useEffect(() => {
        if (options.skip) return;
        execute();
    }, dependencies);

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
        refetch: execute,
    };
};
