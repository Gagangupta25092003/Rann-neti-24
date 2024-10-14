import React from 'react'

export default function Games() {
  const games = [
    "Football", "Hockey", "Volleyball", "Cricket", "Table Tennis",
    "Badminton", "Basketball", "Athletics", "Chess"
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Games</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 text-center">
            <h2 className="text-xl font-bold mb-2">{game}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}