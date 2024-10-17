import { create } from "zustand"

interface ICounterStore {
  count: number
  increaseCount: () => void
  decreaseCount: () => void
  resetCount: () => void
}

export const useCounterStore = create<ICounterStore>((set) => ({
  count: 0,
  increaseCount: () => {
    set((state) => ({ count: state.count + 1 }))
  },
  decreaseCount: () => {
    set((state) => ({ count: state.count - 1 }))
  },
  resetCount: () => {
    set(() => ({ count: 0 }))
  },
}))
