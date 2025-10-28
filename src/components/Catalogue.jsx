import React, {useState} from 'react'
import ProductCard from './ProductCard'
import PRODUCTS from '../data/products'

export default function Catalogue({addToCart}){
  const [filter, setFilter] = useState('All')
  const cats = ['All','Kids','Corporate','Event','Individual']
  const items = filter==='All' ? PRODUCTS : PRODUCTS.filter(p=>p.category===filter)
  return (
    <section id="catalogue" className="py-12 px-6 lg:px-24">
      <h2 className="text-2xl font-bold mb-4">Catalogue</h2>
      <div className="flex gap-3 mb-6">
        {cats.map(c=> <button key={c} onClick={()=>setFilter(c)} className={`px-4 py-2 rounded ${filter===c? 'bg-sv-deep text-white':'border'}`}>{c}</button>)}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(p=> <ProductCard key={p.id} p={p} addToCart={addToCart} />)}
      </div>
    </section>
  )
}
