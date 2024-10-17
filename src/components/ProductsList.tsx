import { PRODUCTS } from "../products"
import { useCartStore } from "../store/cart-store"

const ProductsList = () => {
    const addToCart = useCartStore((state) => state.addToCart)
  return (
    <div>
      {PRODUCTS.map((product) => (
        <div key={product.id}>
          <h1 className="font-semibold text-xl">{product.name}</h1>
          <span>{product.price}</span>
          <span>{product.description}</span>
          <button 
          className="bg-blue-400 px-2 py-1 ml-3 rounded-md"
          onClick={() => addToCart(product)}
          >Add to cart</button>
        </div>
      ))}
    </div>
  )
}

export default ProductsList
