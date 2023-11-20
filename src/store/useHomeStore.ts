import { create } from 'zustand'

interface HomeStoreType {
  count: number
  setCount: () => void
}
export const useHomeStore = create<HomeStoreType>((set, get) => ({
  count: 0,
  setCount: () => set({ count: get().count + 1 }),
}))
