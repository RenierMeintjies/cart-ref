import React, { useState } from 'react'
import CartItem from '../components/CartItem'

const Cart = ({ initialItems }) => {
  const [items, setItems] = useState(initialItems)
  const grandTotal = items.reduce((total, item) => total + item.price * item.qty, 0).toFixed(2)

  const updateQty = (id, newQty) => {
    const newItems = items.map(items => {
      if (items.id === id) {
        return { ...items, qty: newQty }
      }
      return items
    })
    setItems(newItems)
  }

  return (
    <div className="Cart">
      <h1 className="CartHeading">Cart</h1>
      <div className="Cart-items">
        {items.map(item => (
          <CartItem key={item.id} updateQty={updateQty} {...item} />
        ))}
      </div>
      <div>
        <h3 className="GrandTotal">Grand Total: R{grandTotal}</h3>
      </div>
    </div>
  )
}

export default Cart
