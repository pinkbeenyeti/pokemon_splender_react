import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SoundStore {
  bgmEnabled: boolean;
  sfxEnabled: boolean;
  bgmVolume: number;
  sfxVolume: number;
  setBgmEnabled: (enabled: boolean) => void;
  setSfxEnabled: (enabled: boolean) => void;
  setBgmVolume: (volume: number) => void;
  setSfxVolume: (volume: number) => void;
  reset: () => void;
}

export const useSoundStore = create<SoundStore>()(
  persist(
    (set) => ({
      bgmEnabled: true,
      sfxEnabled: true,
      bgmVolume: 50,
      sfxVolume: 50,
      setBgmEnabled: (enabled) => set({ bgmEnabled: enabled }),
      setSfxEnabled: (enabled) => set({ sfxEnabled: enabled }),
      setBgmVolume: (volume) => set({ bgmVolume: volume }),
      setSfxVolume: (volume) => set({ sfxVolume: volume }),
      reset: () =>
        set({
          bgmEnabled: true,
          sfxEnabled: true,
          bgmVolume: 50,
          sfxVolume: 50,
        }),
    }),
    {
      name: "pokemon-sound-settings", // localStorage 키 이름
    }
  )
);
