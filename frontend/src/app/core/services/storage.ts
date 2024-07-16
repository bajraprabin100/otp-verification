type StorageListener<I> = (data: I) => void;
type StorageListenerRemove = () => void;

function prepareObject(value?: unknown): string {
  if (value === null || value === undefined) {
    return "";
  }

  // eslint-disable-next-line no-useless-escape
  return typeof value === "string" ? `\"${value}\"` : JSON.stringify(value);
}

class Storage {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private readonly listeners: Record<string, Set<StorageListener<any>>>;

  constructor() {
    this.listeners = {};
  }

  setItem<I>(key: string, data: I) {
    this.notifyListeners(key, data);
    localStorage.setItem(key, prepareObject(data));
  }

  removeItem(key: string) {
    this.notifyListeners(key, undefined);
    localStorage.removeItem(key);
  }

  getItem<I>(key: string): I | null {
    try {
      const rawData = localStorage.getItem(key);
      return rawData ? JSON.parse(<string>rawData) : null;
    } catch (e) {
      return null;
    }
  }

  registerListener<I>(key: string, callback: StorageListener<I>): StorageListenerRemove {
    this.listeners[key] = this.listeners[key] ?? new Set<StorageListener<I>>();
    this.listeners[key].add(callback);
    return () => {
      this.listeners[key].delete(callback);
    };
  }

  notifyListeners<I>(key: string, data: I) {
    this.listeners[key]?.forEach((listener) => {
      listener?.(data);
    });
  }
}

export const LocalStorage = Object.freeze(new Storage());
