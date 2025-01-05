import { create } from "zustand";
import { persist } from "zustand/middleware";

type ConfigStore = {
  language: string;
  setLanguage: (lang: string) => void;
};

export const useConfigStore = create<ConfigStore>()(
  persist(
    (set) => ({
      language: "en", // 초기값: 영어
      setLanguage: (lang) => set({ language: lang }),
    }),
    {
      name: "language", // LocalStorage에 저장될 키 이름
    }
  )
);
