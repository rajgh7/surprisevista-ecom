import React, {useState} from 'react'
import Hero from './components/Hero'
import Catalogue from './components/Catalogue'
import Offers from './components/Offers'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import EnquiryForm from './components/EnquiryForm'
import Footer from './components/Footer'

window.ENQUIRY_WEBHOOK = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'

export default function App(){
  const [cart,setCart] = useState([])
  const [showCheckout,setShowCheckout] = useState(false)

  const addToCart = (p)=>{
    setCart(prev=>{
      const found = prev.find(x=>x.id===p.id)
      if(found) return prev.map(x=> x.id===p.id? {...x, qty: x.qty+1}:x)
      return [...prev, {...p, qty:1}]
    })
  }
  const updateQty = (id, qty)=>{
    if(qty<=0) setCart(prev=> prev.filter(x=>x.id!==id))
    else setCart(prev=> prev.map(x=> x.id===id?{...x, qty}:x))
  }
  const removeItem = (id)=> setCart(prev=> prev.filter(x=>x.id!==id))
  const openCheckout = ()=> setShowCheckout(true)
  const onComplete = (close=true)=>{ if(close) setShowCheckout(false); setCart([]) }

  return (
    <div>
      <Hero onShop={()=> window.scrollTo({top: document.getElementById('catalogue').offsetTop - 80, behavior:'smooth'})} />
      <Offers />
      <Catalogue addToCart={addToCart} />
      <EnquiryForm />
      <Footer />
      <Cart cart={cart} updateQty={updateQty} removeItem={removeItem} openCheckout={openCheckout} />
      {showCheckout && <Checkout cart={cart} onComplete={onComplete} />}
    </div>
  )
}
