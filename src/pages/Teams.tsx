import React from 'react'

type TeamMember = {
  name: string;
  role: string;
  image: string;
}

type TeamSection = {
  title: string;
  members: TeamMember[];
}

export default function Teams() {
  const teamSections: TeamSection[] = [
    {
      title: "Governors and Co-Governors",
      members: [
        { name: "Dr. John Doe", role: "Governor", image: "/placeholder.svg?height=150&width=150" },
        { name: "Prof. Jane Smith", role: "Co-Governor", image: "/placeholder.svg?height=150&width=150" },
        { name: "Dr. Mike Johnson", role: "Co-Governor", image: "/placeholder.svg?height=150&width=150" },
      ]
    },
    {
      title: "Organizing Secretaries",
      members: [
        { name: "Sarah Brown", role: "Head Organizing Secretary", image: "/placeholder.svg?height=150&width=150" },
        { name: "Tom Wilson", role: "Organizing Secretary", image: "/placeholder.svg?height=150&width=150" },
        { name: "Emily Davis", role: "Organizing Secretary", image: "/placeholder.svg?height=150&width=150" },
      ]
    },
    {
      title: "Mentors",
      members: [
        { name: "Prof. Robert Green", role: "Senior Mentor", image: "/placeholder.svg?height=150&width=150" },
        { name: "Dr. Lisa Chen", role: "Technical Mentor", image: "/placeholder.svg?height=150&width=150" },
        { name: "Coach Alex Turner", role: "Sports Mentor", image: "/placeholder.svg?height=150&width=150" },
      ]
    },
    {
      title: "Team Heads",
      members: [
        { name: "Mark Thompson", role: "Sponsorship Head", image: "/placeholder.svg?height=150&width=150" },
        { name: "Rachel Lee", role: "Planning and Event Management Head", image: "/placeholder.svg?height=150&width=150" },
        { name: "Chris Evans", role: "Publicity Head", image: "/placeholder.svg?height=150&width=150" },
        { name: "Olivia White", role: "Photography Head", image: "/placeholder.svg?height=150&width=150" },
        { name: "Daniel Kim", role: "Videography Head", image: "/placeholder.svg?height=150&width=150" },
      ]
    },
  ]

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Team</h1>
        {teamSections.map((section, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-red-600">{section.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.members.map((member, memberIndex) => (
                <div key={memberIndex} className="bg-gray-900 rounded-lg p-6 flex flex-col items-center">
                  <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}