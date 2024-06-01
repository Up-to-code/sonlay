import { create } from "zustand";

interface SoundProviderI {
  src: string;
  time: number;
  title: string;
  Catogrey?: any[];
}
interface Achain {
  MansgeSound: (data: SoundProviderI) => void;
}
export const UseAoundProvider = create<SoundProviderI & Achain>((set) => ({
  src: "",
  time: 0,
  title: "",
  MansgeSound: (data) => {
    set((state) => {
      if (data.src == state.src || data.src == "") {
        return {};
      }
      return {
        ...data,
      };
    });
  },
}));
