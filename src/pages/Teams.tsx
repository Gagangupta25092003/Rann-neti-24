import React, { useEffect, useState } from 'react';
import { fetchGoogleSheetData } from '../api/googleSheet.ts';

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

type TeamSection = {
  title: string;
  members: TeamMember[];
};

export default function Teams() {
  const [teamSections, setTeamSections] = useState<TeamSection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchGoogleSheetData();
      const sections: { [key: string]: TeamSection } = {};

      data.forEach((row: any) => {
        const { Title, Name, Role, Image } = row;

        if (!sections[Title]) {
          sections[Title] = {
            title: Title,
            members: []
          };
        }

        sections[Title].members.push({
          name: Name,
          role: Role,
          image: Image
        });
      });
      setTeamSections(Object.values(sections));
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black text-white">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Loading...</h2>
          <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="bg-red-600 h-full animate-loading-bar"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-2 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Our Team</h1>
        {teamSections.map((section, index) => (
          <div key={index} className="mb-8 text-center">
            <h2 className="text-3xl font-semibold mb-4 text-red-600">{section.title}</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {section.members.map((member, memberIndex) => (
                <div
                  key={memberIndex}
                  className="bg-gray-900 rounded-lg p-4 flex flex-col justify-center items-center transform hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  <img
                    src={member.image}
                    // alt={member.image}
                    className="w-72 h-80 object-cover rounded-lg mb-4 shadow-lg"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}