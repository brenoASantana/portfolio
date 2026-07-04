import { renderHook, waitFor } from "@testing-library/react";
import { useAsync } from "../../hooks/useAsync";

describe("useAsync Hook", () => {
    it("returns initial loading state", () => {
        const { result } = renderHook(() =>
            useAsync(() => Promise.resolve("data"))
        );

        expect(result.current.isLoading).toBe(true);
        expect(result.current.data).toBeNull();
        expect(result.current.error).toBeNull();
        expect(result.current.isSuccess).toBe(false);
    });

    it("successfully fetches data", async () => {
        const asyncFn = jest.fn().mockResolvedValue("test data");
        const { result } = renderHook(() => useAsync(asyncFn));

        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
            expect(result.current.data).toBe("test data");
            expect(result.current.isSuccess).toBe(true);
        });
    });

    it("handles errors", async () => {
        const error = new Error("Test error");
        const asyncFn = jest.fn().mockRejectedValue(error);
        const { result } = renderHook(() => useAsync(asyncFn));

        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
            expect(result.current.error).toEqual(error);
            expect(result.current.isSuccess).toBe(false);
        });
    });

    it("calls onSuccess callback", async () => {
        const onSuccess = jest.fn();
        const asyncFn = jest.fn().mockResolvedValue("data");
        const { result } = renderHook(() =>
            useAsync(asyncFn, [], { onSuccess })
        );

        await waitFor(() => {
            expect(onSuccess).toHaveBeenCalledWith("data");
        });
    });

    it("calls onError callback", async () => {
        const onError = jest.fn();
        const error = new Error("Test error");
        const asyncFn = jest.fn().mockRejectedValue(error);
        const { result } = renderHook(() =>
            useAsync(asyncFn, [], { onError })
        );

        await waitFor(() => {
            expect(onError).toHaveBeenCalledWith(error);
        });
    });

    it("skips execution when skip option is true", () => {
        const asyncFn = jest.fn().mockResolvedValue("data");
        const { result } = renderHook(() =>
            useAsync(asyncFn, [], { skip: true })
        );

        expect(asyncFn).not.toHaveBeenCalled();
        expect(result.current.isLoading).toBe(true);
    });

    it("refetches data when refetch is called", async () => {
        const asyncFn = jest.fn().mockResolvedValue("initial data");
        const { result } = renderHook(() => useAsync(asyncFn));

        await waitFor(() => {
            expect(result.current.data).toBe("initial data");
        });

        asyncFn.mockResolvedValueOnce("refetched data");
        result.current.refetch();

        await waitFor(() => {
            expect(result.current.data).toBe("refetched data");
        });
    });

    it("re-executes when dependencies change", async () => {
        const asyncFn = jest.fn().mockResolvedValue("data");
        let deps = [1];

        const { result, rerender } = renderHook(
            ({ deps: d }) => useAsync(asyncFn, d),
            { initialProps: { deps } }
        );

        await waitFor(() => {
            expect(asyncFn).toHaveBeenCalledTimes(1);
        });

        deps = [2];
        rerender({ deps });

        await waitFor(() => {
            expect(asyncFn).toHaveBeenCalledTimes(2);
        });
    });

    it("handles string conversion of non-Error objects", async () => {
        const asyncFn = jest.fn().mockRejectedValue("string error");
        const { result } = renderHook(() => useAsync(asyncFn));

        await waitFor(() => {
            expect(result.current.error).toBeInstanceOf(Error);
            expect(result.current.error?.message).toBe("string error");
        });
    });
});
