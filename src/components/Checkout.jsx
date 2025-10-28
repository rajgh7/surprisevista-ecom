import React, {useState} from 'react'

export default function Checkout({cart, onComplete}){
  const [form,setForm] = useState({name:'',email:'',mobile:'',address:''})
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0)
  const submit = async ()=>{
    const payload = {name: form.name, email: form.email, mobile: form.mobile, message: `Order: ${cart.map(i=>i.title+' x'+i.qty).join(', ')}`, source: 'checkout'}
    try{
      await fetch(window.ENQUIRY_WEBHOOK || '/api/enquiry', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload)})
      onComplete()
      alert('Order placed (demo). We will contact you soon.')
    }catch(err){
      alert('Failed to submit order: '+err.message)
    }
  }
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl p-6">
        <h3 className="text-lg font-semibold">Checkout</h3>
        <div className="mt-4 grid grid-cols-1 gap-3">
          <input placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="input" />
          <input placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="input" />
          <input placeholder="Mobile" value={form.mobile} onChange={e=>setForm({...form,mobile:e.target.value})} className="input" />
          <textarea placeholder="Address" value={form.address} onChange={e=>setForm({...form,address:e.target.value})} className="input h-24" />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div>Total: <span className="font-bold">₹{total}</span></div>
          <div className="flex gap-2">
            <button onClick={()=>onComplete(false)} className="px-4 py-2 border rounded">Cancel</button>
            <button onClick={submit} className="px-4 py-2 bg-sv-orange text-white rounded">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}
