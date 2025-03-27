import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware"; // 로컬 스토리지 저장용

interface AuthState {
  authState: boolean;
  newUser: boolean | null;
  setAuthState: (authState: boolean) => void;
  setNewUser: (newUser: boolean) => void;
  logout: () => void;
}

const initialState: Omit<AuthState, "setAuthState" | "setNewUser" | "logout"> =
  {
    authState: false,
    newUser: null,
  };

const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      ...initialState,
      setAuthState: (authState: boolean) => set({ authState }),
      setNewUser: (newUser: boolean) => set({ newUser }),
      logout: () =>
        set({
          authState: false,
          newUser: null,
        }),
    }),
    {
      name: "auth_storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
