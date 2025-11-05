import { create } from "zustand";

interface MacbookState {
  color: string;
  scale: number;
}

interface MacbookActions {
  setColor: (color: string) => void;
  setScale: (scale: number) => void;
  reset: () => void;
}

const useMacbookStore = create<MacbookState & MacbookActions>((set) => ({
  color: "#2e2c2e",
  setColor: (color) => set({ color }),

  scale: 0.08,
  setScale: (scale) => set({ scale }),
  reset: () => set({ color: "#2c2e3e", scale: 0.08 }),
}));

export default useMacbookStore;
