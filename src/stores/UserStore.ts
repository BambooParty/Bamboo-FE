import { create } from "zustand";

// 사용자 상태 타입
interface User {
  userId: string;
  nickname: string;
  mbti: string;
}

// Zustand 스토어 타입
interface UserStore {
  user: User | null; // 사용자 정보
  setUser: (user: User) => void; // 사용자 정보 설정
  clearUser: () => void; // 사용자 정보 초기화
  updateUserField: (field: Partial<User>) => void;
}

// Zustand 스토어 생성
const useUserStore = create<UserStore>()((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
  updateUserField: (field) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...field } : null,
    })),
}));

export default useUserStore;
