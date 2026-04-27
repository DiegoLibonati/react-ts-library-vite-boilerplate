import { act, renderHook } from "@testing-library/react";

import { useToggle } from "@/hooks/useToggle/useToggle";

describe("useToggle", () => {
  describe("initialization", () => {
    it("should initialize with false by default", () => {
      const { result } = renderHook(() => useToggle());
      expect(result.current.value).toBe(false);
    });

    it("should initialize with the provided initial value", () => {
      const { result } = renderHook(() => useToggle(true));
      expect(result.current.value).toBe(true);
    });
  });

  describe("toggle", () => {
    it("should switch value from false to true", () => {
      const { result } = renderHook(() => useToggle());
      act(() => {
        result.current.toggle();
      });
      expect(result.current.value).toBe(true);
    });

    it("should switch value from true to false", () => {
      const { result } = renderHook(() => useToggle(true));
      act(() => {
        result.current.toggle();
      });
      expect(result.current.value).toBe(false);
    });

    it("should toggle value multiple times", () => {
      const { result } = renderHook(() => useToggle());
      act(() => {
        result.current.toggle();
      });
      expect(result.current.value).toBe(true);
      act(() => {
        result.current.toggle();
      });
      expect(result.current.value).toBe(false);
    });
  });

  describe("setTrue", () => {
    it("should set value to true", () => {
      const { result } = renderHook(() => useToggle());
      act(() => {
        result.current.setTrue();
      });
      expect(result.current.value).toBe(true);
    });

    it("should keep value true when already true", () => {
      const { result } = renderHook(() => useToggle(true));
      act(() => {
        result.current.setTrue();
      });
      expect(result.current.value).toBe(true);
    });
  });

  describe("setFalse", () => {
    it("should set value to false", () => {
      const { result } = renderHook(() => useToggle(true));
      act(() => {
        result.current.setFalse();
      });
      expect(result.current.value).toBe(false);
    });

    it("should keep value false when already false", () => {
      const { result } = renderHook(() => useToggle());
      act(() => {
        result.current.setFalse();
      });
      expect(result.current.value).toBe(false);
    });
  });
});
