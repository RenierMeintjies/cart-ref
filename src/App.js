import Cart from './components/Cart'
import './App.css'

const item = [
  { id: 1, name: 'Taco', price: 3.64, qty: 2 },
  { id: 2, name: 'Burger', price: 5.14, qty: 1 },
  { id: 3, name: 'Fries', price: 1.34, qty: 4 },
]

function App() {
  return (
    <div className="App">
      <Cart initialItems={item} />
    </div>
  )
}

export default App
