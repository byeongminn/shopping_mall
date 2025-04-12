import { create } from "zustand";

type LoginState = {
  isLoggedIn: boolean;
  setIsLoggedIn: (status: boolean) => void;
};

export const useLoginStore = create<LoginState>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (status) => set({ isLoggedIn: status }),
}));
