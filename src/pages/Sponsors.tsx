import React from 'react'

export default function Sponsors() {
  const sponsors = [
    "Adidas", "Nike", "Puma", "Under Armour", "Reebok", "New Balance"
  ]

  return (
    <section className="bg-gray-900 py-12 text-xl">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Sponsors</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="bg-white rounded-lg p-4 flex items-center justify-center">
              <span className="text-black font-bold">{sponsor}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}