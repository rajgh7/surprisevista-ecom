import React from 'react'

export default function ProductCard({p, addToCart}){
  return (
    <div className="card flex flex-col gap-3">
      <div className="h-44 bg-gray-100 rounded flex items-center justify-center"> <img src={p.img} alt={p.title} className="max-h-40"/></div>
      <div className="flex-1">
        <h4 className="font-semibold">{p.title}</h4>
        <p className="text-sm text-gray-500">{p.desc}</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold">₹{p.price}</div>
        <button onClick={() => addToCart(p)} className="px-3 py-1 rounded bg-sv-orange text-white">Add</button>
      </div>
    </div>
  )
}
