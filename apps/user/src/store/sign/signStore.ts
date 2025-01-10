import {create} from "zustand";
import { SIGN_SECTION_NAME } from "@/constants/sign/sign.constants";

export type SectionName = typeof SIGN_SECTION_NAME[number]["title"];


export interface SectionStore {
  section: SectionName;
  setSection: (section: SectionName) => void;
}

export interface LogoStore {
  isState: boolean; 
  setState: () => void; 
}

export const useSectionStore = create<SectionStore>((set) => ({
  section: "login",
  setSection: (section) => set({ section }), 
}));

export const useLogoStore = create<LogoStore>((set) => ({
  isState: false, 
  setState: () => set((state) => ({ isState: !state.isState })), 
}));
