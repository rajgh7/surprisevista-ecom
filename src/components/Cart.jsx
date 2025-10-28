import React from 'react'

export default function Cart({cart,updateQty,removeItem,openCheckout}){
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0)
  return (
    <aside className="fixed right-6 bottom-6 w-96 bg-white rounded-xl shadow-lg p-4">
      <h4 className="font-semibold">Cart</h4>
      <div className="max-h-56 overflow-auto mt-2 space-y-2">
        {cart.length===0 && <div className="text-sm text-gray-500">No items yet</div>}
        {cart.map(it=> (
          <div key={it.id} className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">img</div>
            <div className="flex-1">
              <div className="text-sm font-medium">{it.title}</div>
              <div className="text-xs text-gray-500">₹{it.price}</div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={()=>updateQty(it.id, it.qty-1)} className="px-2">-</button>
              <div>{it.qty}</div>
              <button onClick={()=>updateQty(it.id, it.qty+1)} className="px-2">+</button>
            </div>
            <button onClick={()=>removeItem(it.id)} className="text-red-500">x</button>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="font-semibold">Total</div>
        <div className="font-bold">₹{total}</div>
      </div>
      <div className="mt-3">
        <button disabled={cart.length===0} onClick={openCheckout} className="w-full py-2 rounded bg-sv-deep text-white">Checkout</button>
      </div>
    </aside>
  )
}
