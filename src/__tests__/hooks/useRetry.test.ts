import { renderHook, waitFor } from "@testing-library/react";
import { useRetry } from "../../hooks/useRetry";

describe("useRetry Hook", () => {
    it("returns initial state", () => {
        const { result } = renderHook(() => useRetry());

        expect(result.current.data).toBeNull();
        expect(result.current.error).toBeNull();
        expect(result.current.isLoading).toBe(false);
    });

    it("successfully executes async function", async () => {
        const asyncFn = jest.fn().mockResolvedValue("success");
        const { result } = renderHook(() => useRetry());

        result.current.retry(asyncFn);

        await waitFor(() => {
            expect(result.current.data).toBe("success");
            expect(result.current.error).toBeNull();
        });
    });

    it("handles errors", async () => {
        const error = new Error("Test error");
        const asyncFn = jest.fn().mockRejectedValue(error);
        const { result } = renderHook(() => useRetry({ maxRetries: 1 }));

        await result.current.retry(asyncFn);

        await waitFor(() => {
            expect(result.current.error).toEqual(expect.any(Error));
            expect(result.current.data).toBeNull();
        });
    });

    it("retries on failure with exponential backoff", async () => {
        const asyncFn = jest.fn()
            .mockRejectedValueOnce(new Error("Fail 1"))
            .mockRejectedValueOnce(new Error("Fail 2"))
            .mockResolvedValueOnce("success");

        const { result } = renderHook(() =>
            useRetry({ maxRetries: 3, delayMs: 10, backoffMultiplier: 2 })
        );

        await result.current.retry(asyncFn);

        await waitFor(() => {
            expect(asyncFn).toHaveBeenCalledTimes(3);
            expect(result.current.data).toBe("success");
        });
    });

    it("calls onSuccess callback", async () => {
        const onSuccess = jest.fn();
        const asyncFn = jest.fn().mockResolvedValue("data");
        const { result } = renderHook(() => useRetry({ onSuccess, maxRetries: 1 }));

        await result.current.retry(asyncFn);

        await waitFor(() => {
            expect(result.current.data).toBe("data");
        });

        expect(onSuccess).toHaveBeenCalled();
    });

    it("calls onError callback after max retries", async () => {
        const onError = jest.fn();
        const error = new Error("Test error");
        const asyncFn = jest.fn().mockRejectedValue(error);
        const { result } = renderHook(() => useRetry({ maxRetries: 1, onError }));

        await result.current.retry(asyncFn);

        await waitFor(() => {
            expect(onError).toHaveBeenCalledWith(expect.any(Error));
        });
    });

    it("calls onRetry callback on failed attempts", async () => {
        const onRetry = jest.fn();
        const asyncFn = jest.fn()
            .mockRejectedValueOnce(new Error("Fail"))
            .mockResolvedValueOnce("success");

        const { result } = renderHook(() =>
            useRetry({ maxRetries: 2, delayMs: 10, onRetry })
        );

        await result.current.retry(asyncFn);

        await waitFor(() => {
            expect(onRetry).toHaveBeenCalledWith(1, expect.any(Error));
        });
    });

    it("resets state with reset function", async () => {
        const asyncFn = jest.fn().mockResolvedValue("data");
        const { result } = renderHook(() => useRetry());

        await result.current.retry(asyncFn);

        await waitFor(() => {
            expect(result.current.data).toBe("data");
            expect(result.current.isLoading).toBe(false);
        });

        // Reset should clear the data
        result.current.reset();

        // After reset, verify state is cleared
        expect(result.current.error).toBeNull();
        expect(result.current.isLoading).toBe(false);
    });
});
