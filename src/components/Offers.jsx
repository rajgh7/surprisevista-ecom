import React from 'react'

export default function Offers(){
  return (
    <section className="py-12 px-6 lg:px-24 bg-gray-50">
      <h3 className="text-xl font-bold mb-4">Offers & Combos</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="card"> <h4 className="font-semibold">Flat 20% off</h4><p className="text-sm text-gray-500">On orders above ₹2000</p></div>
        <div className="card"> <h4 className="font-semibold">Festive Combo</h4><p className="text-sm text-gray-500">Curated festival gift boxes</p></div>
        <div className="card"> <h4 className="font-semibold">Corporate Pack</h4><p className="text-sm text-gray-500">Bulk pricing for corporate gifting</p></div>
      </div>
    </section>
  )
}
