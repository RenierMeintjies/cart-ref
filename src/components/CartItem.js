import React from 'react'

const CartItem = ({ id, name, price, qty, updateQty }) => {
  const addOne = () => updateQty(id, qty + 1)
  const subtractOne = () => updateQty(id, qty - 1)

  return (
    <div className="CartItem">
      <div>{name}</div>
      <div>R{price}</div>
      <div>
        <button onClick={subtractOne} disabled={qty <= 1}>
          -
        </button>
        {qty}
        <button onClick={addOne}>+</button>
      </div>
      <div>Total: R{qty * price}</div>
    </div>
  )
}

export default CartItem
