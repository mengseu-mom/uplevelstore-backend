import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const profileStore = create(
  persist(
    (set, get) => ({
      profile: null,
      access_token: null,
      setProfile: (params) => set((pre) => ({ profile: params })),
      setAccessToken: (params) => set((pre) => ({ access_token: params })),

      logout: (param) => set((pre) => ({ profile: null })),
    }),
    {
      name: "profile",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
