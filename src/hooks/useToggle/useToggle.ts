import { useCallback, useState } from "react";

import type { UseToggleReturn } from "@/types/hooks";

export const useToggle = (initialValue = false): UseToggleReturn => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = useCallback((): void => {
    setValue((prev) => !prev);
  }, []);

  const setTrue = useCallback((): void => {
    setValue(true);
  }, []);

  const setFalse = useCallback((): void => {
    setValue(false);
  }, []);

  return { value, toggle, setTrue, setFalse };
};
