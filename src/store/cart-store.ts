import { create } from "zustand"

interface Product {
  id: string
  name: string
  price: number
  category: string
  description: string
}

interface ICartStore {
  cart: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  clearCart: () => void
}

export const useCartStore = create<ICartStore>((set) => ({
  cart: [],
  addToCart: (product) => {
    set((state) => ({ cart: [...state.cart, product] }))
  },
  removeFromCart: (productId) => {
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    }))
  },
  clearCart: () => {
    set({ cart: [] })
  },
}))
