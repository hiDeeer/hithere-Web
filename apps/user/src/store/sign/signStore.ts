import {create} from "zustand";
import { SIGN_SECTION_NAME } from "@/constants/sign/sign.constants";

type SectionName = typeof SIGN_SECTION_NAME[number]["title"];


interface SectionStore {
  section: SectionName;
  setSection: (section: SectionName) => void;
}

export const useSectionStore = create<SectionStore>((set) => ({
  section: "login",
  setSection: (section) => set({ section }), 
}));
