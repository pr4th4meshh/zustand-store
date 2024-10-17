import "./App.css"
import Cart from "./components/Cart"
import ProductsList from "./components/ProductsList"
// import { useCounterStore } from "./store"

function App() {
  // const { count, increaseCount, decreaseCount, resetCount } = useCounterStore()
  return (
    <div className="w-full flex flex-col items-center pt-20">
      <h1 className="text-3xl text-red-500 font-semibold">
        Welcome to Zustand Store
      </h1>

      <div className="flex flex-row justify-evenly">
      <ProductsList />
      <Cart />
      </div>

      {/* <span className="text-2xl">Count: {count}</span>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={resetCount}>Reset</button> */}
    </div>
  )
}

export default App
