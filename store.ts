import { create } from "zustand";
import { persist } from "zustand/middleware";

interface currentAuthPageStore {
  current: "Login" | "Signup";
  setCurrentAuthPage: (page: "Login" | "Signup") => void;
}

export const useCurrentAuthPageStore = create<currentAuthPageStore>()(
  persist(
    (set) => ({
      current: "Login",
      setCurrentAuthPage: (page: "Login" | "Signup") =>
        set(() => ({ current: page })),
    }),
    {
      name: "currentAuthPage",
    }
  )
);
