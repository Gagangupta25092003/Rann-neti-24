import React, { useState, useEffect } from 'react';
import { fetchGoogleSheetData } from '../api/participant.ts';

interface ParticipantRow {
  CollegeName: string;
  Email: string;
  'Number of participants in Cricket': string;
  'Number of participants in Badminton (Men)': string;
  'Number of participants in Badminton (Women)': string;
  'Number of participants in Volleyball (Men)': string;
  'Number of participants in Volleyball (Women)': string;
  'Number of participants in Football': string;
  'Number of participants in Hockey': string;
  'Number of participants in Basketball (Men)': string;
  'Number of participants in Basketball (Women)': string;
  'Number of participants in Table-Tennis (Men)': string;
  'Number of participants in Table-Tennis (Women)': string;
  'Number of participants in Chess': string;
  'Number of participants in Lawn-Tennis (Men)': string;
  'Number of participants in Lawn-Tennis (Women)': string;
  'Number of participants in Athletics': string;
  [key: string]: string;
}

const SPORTS_CONFIG = {
  'Cricket': { label: 'Cricket' },
  'Badminton (Men)': { label: 'Badminton (Men)' },
  'Badminton (Women)': { label: 'Badminton (Women)' },
  'Volleyball (Men)': { label: 'Volleyball (Men)' },
  'Volleyball (Women)': { label: 'Volleyball (Women)' },
  'Football': { label: 'Football' },
  'Hockey': { label: 'Hockey' },
  'Basketball (Men)': { label: 'Basketball (Men)' },
  'Basketball (Women)': { label: 'Basketball (Women)' },
  'Table-Tennis (Men)': { label: 'Table Tennis (Men)' },
  'Table-Tennis (Women)': { label: 'Table Tennis (Women)' },
  'Chess': { label: 'Chess' },
  'Lawn-Tennis (Men)': { label: 'Lawn Tennis (Men)' },
  'Lawn-Tennis (Women)': { label: 'Lawn Tennis (Women)' },
  'Athletics': { label: 'Athletics' },
} as const;

type SportKeys = keyof typeof SPORTS_CONFIG;

const SportsParticipants: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SportKeys>('Cricket');
  const [participants, setParticipants] = useState<ParticipantRow[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchGoogleSheetData();
        if (!Array.isArray(data)) {
          throw new Error('Data received is not an array');
        }
        setParticipants(data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch participant data');
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const getParticipantsForSport = (sport: SportKeys) => {
    const participantsForSport = participants.filter(p => {
      const participantsCountKey = `Number of participants in ${sport}`;
      return Number(p[participantsCountKey]) > 0;
    });

    return participantsForSport.map((p, index) => ({
      sno: index + 1,
      collegeName: p["College Name"],
      participantsCount: p[`Number of participants in ${sport}`],
    }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-gray-600">Loading participants data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center text-red-600">
          <p>{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {(Object.entries(SPORTS_CONFIG) as [SportKeys, { label: string }][]).map(([key, { label }]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-3 py-1 text-sm font-medium rounded-t-lg transition-colors
                ${activeTab === key ? 'bg-red-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-red-600'}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-4">
          {SPORTS_CONFIG[activeTab].label} Participants
          <span className="text-sm font-normal ml-2 text-gray-500">
            (Total: {getParticipantsForSport(activeTab).length})
          </span>
        </h2>

        <div className="overflow-x-auto rounded-lg border border-red-600">
          <table className="min-w-full bg-gray-800 text-white">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">S.No</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">College Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Number of Participants</th>
              </tr>
            </thead>
            <tbody>
              {getParticipantsForSport(activeTab).map((row) => (
                <tr key={row.sno} className="hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{row.sno}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{row.collegeName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{row.participantsCount}</td>
                </tr>
              ))}
              {getParticipantsForSport(activeTab).length === 0 && (
                <tr>
                  <td colSpan={3} className="px-6 py-4 text-center text-sm">No participants found for this sport</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SportsParticipants;
