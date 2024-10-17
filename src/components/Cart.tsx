import { useCartStore } from "../store/cart-store"

const Cart = () => {
  //* One way to use the hook
  //   const { cart, removeFromCart, clearCart } = useCartStore((state) => ({
  //     cart: state.cart,
  //     removeFromCart: state.removeFromCart,
  //     clearCart: state.clearCart,
  //   }))

  //* Another way to use the hook
  const cart = useCartStore((state) => state.cart)
  const removeFromCart = useCartStore((state) => state.removeFromCart)
  const clearCart = useCartStore((state) => state.clearCart)

  return (
    <div className="w-[400px] flex flex-col items-center">
      <div className="flex flex-row">
      <h1 className="text-xl">Your Cart({cart.length}):</h1>
      {cart.length > 1 && (
        <button
          className="bg-green-500 px-2 py-1 ml-3 rounded-md"
          onClick={clearCart}
        >
          Clear cart
        </button>
      )}
      </div>

      {cart?.map((product) => (
        <div key={product.id} className="p-5 bg-yellow-200 my-2">
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <button
            className="bg-red-500 px-2 py-1 ml-3 rounded-md"
            onClick={() => removeFromCart(product.id)}
          >
            Remove from cart
          </button>
        </div>
      ))}
    </div>
  )
}

export default Cart
