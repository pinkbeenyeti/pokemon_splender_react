import { useEffect, useRef } from "react";
import { useSoundStore } from "@/store";

export const useSoundSettings = () => {
  const {
    bgmEnabled,
    sfxEnabled,
    bgmVolume,
    sfxVolume,
    setBgmEnabled,
    setSfxEnabled,
    setBgmVolume,
    setSfxVolume,
    reset,
  } = useSoundStore();

  const bgmRef = useRef<HTMLAudioElement>(null);
  const sfxRef = useRef<HTMLAudioElement>(null);

  const bgmUrl = `${import.meta.env.VITE_AUDIO_BASE_URL}/bgm.mp3`;
  const sfxUrl = `${import.meta.env.VITE_AUDIO_BASE_URL}/sfx-click.mp3`;

  useEffect(() => {
    if (!bgmRef.current) return;
    bgmRef.current.loop = true;
    bgmRef.current.volume = bgmVolume / 100;
    bgmEnabled ? bgmRef.current.play().catch(() => {}) : bgmRef.current.pause();
  }, [bgmEnabled, bgmVolume]);

  useEffect(() => {
    if (sfxRef.current) {
      sfxRef.current.volume = sfxVolume / 100;
    }
  }, [sfxVolume]);

  const playSfx = () => {
    if (sfxEnabled && sfxRef.current) {
      sfxRef.current.currentTime = 0;
      sfxRef.current.play();
    }
  };

  return {
    bgmEnabled,
    setBgmEnabled,
    sfxEnabled,
    setSfxEnabled,
    bgmVolume,
    setBgmVolume,
    sfxVolume,
    setSfxVolume,
    playSfx,
    reset,
    bgmRef,
    sfxRef,
    bgmUrl,
    sfxUrl,
  };
};
