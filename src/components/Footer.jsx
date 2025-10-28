import React from 'react'

export default function Footer(){
  return (
    <footer className="py-8 px-6 lg:px-24 border-t mt-12">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img src="/SupriseVistalogo.png" className="w-28" alt="logo"/>
          <div>
            <div className="font-semibold">SurpriseVista</div>
            <div className="text-sm text-gray-500">Unbox Happiness</div>
          </div>
        </div>
        <div className="flex gap-3">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">WhatsApp</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
