import React from 'react'

export default function Hero({onShop}){
  return (
    <section className="py-16 px-6 lg:px-24 flex flex-col lg:flex-row items-center gap-8">
      <div className="flex-1">
        <img src="/SupriseVistalogo.png" alt="SurpriseVista" className="w-48 mb-6"/>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-sv-deep">Make Every Moment a Surprise</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-lg">Premium curated gifts for kids, corporate events, and personal moments. Unbox happiness with SurpriseVista.</p>
        <div className="mt-6 flex gap-4">
          <button onClick={onShop} className="px-6 py-3 rounded-full bg-sv-deep text-white font-semibold shadow">Shop Gifts</button>
          <a href="#enquiry" className="px-6 py-3 rounded-full border border-gray-200">Enquire</a>
        </div>
      </div>
      <div className="flex-1">
        <div className="card">
          <h3 className="font-semibold">Trending</h3>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded p-3">Image</div>
            <div className="bg-gray-50 rounded p-3">Image</div>
          </div>
        </div>
      </div>
    </section>
  )
}
