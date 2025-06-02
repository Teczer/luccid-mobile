import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

export const mmkvStorage = {
  getItem: async (key: string) => {
    const value = storage.getString(key);
    return value === undefined ? null : value;
  },
  removeItem: async (key: string) => {
    storage.delete(key);
  },
  setItem: async (key: string, value: string) => {
    storage.set(key, value);
  },
};
