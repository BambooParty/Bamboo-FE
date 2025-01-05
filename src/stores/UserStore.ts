import { create } from "zustand";
import { persist } from "zustand/middleware";

// 사용자 상태 타입
interface User {
  userId: string;
  nickname: string;
}

// Zustand 스토어 타입
interface UserStore {
  user: User | null; // 사용자 정보
  setUser: (user: User) => void; // 사용자 정보 설정
  clearUser: () => void; // 사용자 정보 초기화
}

// Zustand 스토어 생성
const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: "user-storage", // 로컬스토리지 키 이름
    }
  )
);

export default useUserStore;
