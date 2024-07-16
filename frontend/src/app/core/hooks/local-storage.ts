import { useEffect, useMemo, useState } from "react";

import { LocalStorage } from "../services/storage";

export function useLocalStorage<T>(key: string): [T | null, (data?: T | null) => void] {
  const [data, setData] = useState<T | null>(LocalStorage.getItem(key));

  useEffect(() => {
    return LocalStorage.registerListener<T>(key, (value) => setData(value));
  }, [key]);

  return useMemo(() => [data, (newData) => LocalStorage.setItem(key, newData)], [data]);
}
