import React, {useState} from 'react'

export default function EnquiryForm(){
  const [form,setForm] = useState({name:'',mobile:'',email:'',message:''})
  const [loading,setLoading] = useState(false)
  const submit = async (e)=>{
    e.preventDefault()
    setLoading(true)
    try{
      const payload = {...form, source: 'enquiry'}
      const res = await fetch(window.ENQUIRY_WEBHOOK || '/api/enquiry', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload)})
      const json = await res.json().catch(()=>({}))
      setLoading(false)
      alert('Enquiry submitted — thank you!')
      setForm({name:'',mobile:'',email:'',message:''})
    }catch(err){ setLoading(false); alert('Failed: '+err.message) }
  }
  return (
    <section id="enquiry" className="py-12 px-6 lg:px-24">
      <h3 className="text-xl font-bold mb-4">Customer Enquiry</h3>
      <form onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
        <input required placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="input" />
        <input required placeholder="Mobile" value={form.mobile} onChange={e=>setForm({...form,mobile:e.target.value})} className="input" />
        <input placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="input" />
        <textarea required placeholder="What they want" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} className="input h-32 col-span-1 sm:col-span-2" />
        <div className="col-span-1 sm:col-span-2">
          <button type="submit" disabled={loading} className="px-6 py-2 rounded bg-sv-deep text-white">Submit</button>
        </div>
      </form>
    </section>
  )
}
