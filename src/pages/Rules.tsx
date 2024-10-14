import React from 'react'

export default function Rules() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Rules and Regulations</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-4">General Rules</h2>
          <ul className="list-disc list-inside text-lg">
            <li>All participants must be currently enrolled students of their respective institutions.</li>
            <li>Each team must have a designated team captain who will be responsible for communication with the organizers.</li>
            <li>Participants must bring their valid college ID cards for verification.</li>
            <li>Any form of misconduct or unsportsmanlike behavior will result in disqualification.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Game-specific Rules</h2>
          <p className="text-lg mb-4">
            Detailed rules for each game will be provided to the team captains before the start of the tournament. 
            These rules will adhere to the standard regulations of each sport with any modifications specific to 
            Rann-neti' 2024 clearly stated.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Dispute Resolution</h2>
          <p className="text-lg">
            In case of any disputes, the decision of the tournament committee will be final and binding.
          </p>
        </section>
      </div>
    </div>
  )
}