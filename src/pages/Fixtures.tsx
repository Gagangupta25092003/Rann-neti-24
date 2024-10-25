import React, { useState, useEffect } from 'react';
import { fetchGoogleSheetData } from '../api/fixture.ts';

interface FixtureRow {
  Game: string;
  Venue: string;
  'Team/Pool': string;
  Day: string;
  'Match No.': string;
  Timings: string;
  'Team A': string;
  'Team B': string;
  Status?: string;
  [key: string]: string | undefined;
}

const SPORTS_CONFIG = {
  'Cricket': { label: 'Cricket' },
  'Football': { label: 'Football' },
  'Hockey': { label: 'Hockey' },
  'Basketball-Men': { label: 'Basketball (Men)' },
  'Basketball-Women': { label: 'Basketball (Women)' },
  'Volleyball-Men': { label: 'Volleyball (Men)' },
  'Volleyball-Women': { label: 'Volleyball (Women)' },
  'TableTennis-Men': { label: 'Table Tennis (Men)' },
  'TableTennis-Women': { label: 'Table Tennis (Women)' },
  'Chess': { label: 'Chess' },
  'Badminton-Men': { label: 'Badminton (Men)' },
  'Badminton-Women': { label: 'Badminton (Women)' },
} as const;

type SportKeys = keyof typeof SPORTS_CONFIG;

const FixturesPage: React.FC = () => {
  const [fixtures, setFixtures] = useState<FixtureRow[]>([]);
  const [activeTab, setActiveTab] = useState<SportKeys>('Cricket');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchGoogleSheetData();
        if (!Array.isArray(data)) {
          throw new Error('Data received is not an array');
        }
        // Clean and validate the data
        const cleanedData = data.filter(row => {
          return row && 
                 row.Game && 
                 row['Match No.'] && 
                 row.Day && 
                 row.Timings && 
                 row['Team A'] && 
                 row['Team B'];
        });
        setFixtures(cleanedData);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch fixture data');
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const renderFixtures = (game: SportKeys) => {
    // Improved filtering to handle case sensitivity and whitespace
    const filteredFixtures = fixtures.filter(fixture => 
      fixture.Game.trim().toLowerCase() === game.toLowerCase()
    );

    // Sort fixtures by Day and Match No
    const sortedFixtures = filteredFixtures.sort((a, b) => {
      // First sort by Day
      const dayA = parseInt(a.Day.replace(/\D/g, ''));
      const dayB = parseInt(b.Day.replace(/\D/g, ''));
      if (dayA !== dayB) return dayA - dayB;
      
      // Then sort by Match No
      const matchNoA = parseInt(a['Match No.'].replace(/\D/g, ''));
      const matchNoB = parseInt(b['Match No.'].replace(/\D/g, ''));
      return matchNoA - matchNoB;
    });

    return sortedFixtures.length ? (
      sortedFixtures.map((fixture, index) => (
        <tr key={`${fixture.Game}-${fixture.Day}-${fixture['Match No.']}`} 
            className="hover:bg-red-700">
          <td className="text-center px-6 py-4 text-sm">{fixture['Match No.']}</td>
          <td className="text-center px-6 py-4 text-sm">{fixture.Day}</td>
          <td className="text-center px-6 py-4 text-sm">{fixture.Timings}</td>
          <td className="text-center px-6 py-4 text-sm">{fixture['Team A']} vs {fixture['Team B']}</td>
          <td className="text-center px-6 py-4 text-sm">{fixture.Venue}</td>
          {fixture.Status && <td className="text-center px-6 py-4 text-sm">{fixture.Status}</td>}
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={6} className="px-6 py-4 text-center text-sm">No matches scheduled for this sport</td>
      </tr>
    );
  };

  // Rest of the component remains the same
  if (loading) {
    return (
      <div className="flex bg-black justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mb-4"></div>
        <p className="text-white text-sm">Loading fixtures data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-black flex justify-center items-center min-h-screen">
        <div className="text-center text-red-600">
          <p>{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-red-500"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black container mx-auto p-4 min-h-screen">
      <div className="flex flex-wrap gap-2 mb-6">
        {(Object.entries(SPORTS_CONFIG) as [SportKeys, { label: string }][])
          .map(([key, { label }]) => (
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

      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-4 text-white">
          {SPORTS_CONFIG[activeTab].label} Fixtures
          <span className="text-sm font-normal ml-2">
            (Total: {fixtures.filter(f => f.Game.trim().toLowerCase() === activeTab.toLowerCase()).length})
          </span>
        </h2>

        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full bg-red-900 text-white">
            <thead>
              <tr>
                <th className="text-center px-6 py-3 text-xs font-medium uppercase tracking-wider">Match No</th>
                <th className="text-center px-6 py-3 text-xs font-medium uppercase tracking-wider">Day</th>
                <th className="text-center px-6 py-3 text-xs font-medium uppercase tracking-wider">Timings</th>
                <th className="text-center px-6 py-3 text-xs font-medium uppercase tracking-wider">Teams</th>
                <th className="text-center px-6 py-3 text-xs font-medium uppercase tracking-wider">Venue</th>
                <th className="text-center px-6 py-3 text-xs font-medium uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {renderFixtures(activeTab)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FixturesPage;