import { create } from "zustand";
import { persist } from "zustand/middleware"; // 로컬 스토리지 저장용

interface AuthState {
  token: string | null;
  refreshToken: string | null;
  authState: boolean | null;
  setToken: (token: string) => void;
  setRefreshToken: (refreshToken: string) => void;
  logout: () => void;
}

const initialState: Omit<AuthState, "setToken" | "setRefreshToken" | "logout"> =
  {
    token: null,
    refreshToken: null,
    authState: null,
  };

const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      ...initialState,
      setToken: (token: string) => set({ token, authState: true }),
      setRefreshToken: (refreshToken: string) => set({ refreshToken }),
      logout: () => set({ token: null, refreshToken: null, authState: false }),
    }),
    { name: "auth-storage" } // 로컬 스토리지 키, 해당 키의 값으로 저장됨
  )
);

export default useAuthStore;
