import { create } from "zustand";

type LoginModalState = {
  /** Increment to request opening the login modal (e.g. from product or membership flows). */
  openSignal: number;
  requestLogin: () => void;
};

export const useLoginModalStore = create<LoginModalState>((set) => ({
  openSignal: 0,
  requestLogin: () => set((s) => ({ openSignal: s.openSignal + 1 })),
}));
