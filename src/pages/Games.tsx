import React from "react";

export default function Games() {
  const games = [
    {
      name: "Athletics",
      men: { entryFees: "Rs. 500 per head" },
      women: { entryFees: "Rs. 500 per head" },
      rulesLink:
        "https://drive.google.com/file/d/12BSyv7TBv40JdFBli_VyfCBu2VRjWmEo/view?usp=drive_link",
    },
    {
      name: "Badminton",
      men: { teamSize: "Max 5 players", entryFees: "Rs. 3000" },
      women: { teamSize: "Max 4 players", entryFees: "Rs. 3000" },
      rulesLink:
        "https://drive.google.com/file/d/1tTSw_fSmQWlQul_rO2sw2DCezEOjMgrL/view?usp=drive_link",
    },
    {
      name: "Basketball",
      men: { teamSize: "11 players", entryFees: "Rs. 2000" },
      women: { teamSize: "10 players", entryFees: "Rs. 2000" },
      rulesLink:
        "https://drive.google.com/file/d/1Fk-A1gkITQph3IMMS6wNVpgf1srJhdOp/view?usp=drive_link",
    },
    {
      name: "Chess",
      men: { teamSize: "4-5 players", entryFees: "Rs. 2000" },
      women: { teamSize: "4-5 players", entryFees: "Rs. 2000" },
      rulesLink:
        "https://drive.google.com/file/d/1NXPopGjVWRNyDXRiS1HxIwvZD9xAdXrw/view?usp=drive_link",
    },
    {
      name: "Cricket",
      men: { teamSize: "Max 16 players", entryFees: "Rs. 4000" },
      rulesLink:
        "https://drive.google.com/file/d/1A0oMwyQMWGqyPHZFWJtIAARYo7N_guMP/view?usp=drive_link",
    },
    {
      name: "Football",
      men: { teamSize: "Max 16 players", entryFees: "Rs. 3000" },
      rulesLink:
        "https://drive.google.com/file/d/1Fm_beTKObGpAaraTvPCH3E_3Ur1iflwm/view?usp=drive_link",
    },
    {
      name: "Hockey",
      men: { teamSize: "Max 15 players", entryFees: "Rs. 1500" },
      rulesLink:
        "https://drive.google.com/file/d/1wUv3fMIv01eLv3U96gr3poAPcTMv5cCk/view?usp=drive_link",
    },
    {
      name: "Lawn Tennis",
      men: { teamSize: "3-4 players", entryFees: "Rs. 1500" },
      rulesLink:
        "https://drive.google.com/file/d/17NOZk6YkEmkXxp25ax2fktcD-3nahpBh/view?usp=drive_link",
    },
    {
      name: "Table Tennis",
      men: { teamSize: "3 players", entryFees: "Rs. 2000" },
      women: { teamSize: "2-3 players", entryFees: "Rs. 2000" },
      rulesLink:
        "https://drive.google.com/file/d/1E4ugFfOT4L97FdJHDt6fM74tswjCpHiO/view?usp=drive_link",
    },
    {
      name: "Volleyball",
      men: { teamSize: "12 players", entryFees: "Rs. 3000" },
      women: { teamSize: "12 players", entryFees: "Rs. 3000" },
      rulesLink:
        "https://drive.google.com/file/d/1CmI8WlcCHsY0jz3rSetmJ2T0fywRsTXx/view?usp=drive_link",
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 bg-black flex flex-col items-center">
      <h1
        className="text-5xl font-extrabold mb-8 text-center"
        style={{ color: "#f0f0f0", textShadow: "2px 2px 5px #b22222" }}
      >
        Games
      </h1>
      <div className="flex">
        <div className="flex-1 pr-16 hidden md:block">
          <img src="./icon1.png" alt="icon 1" />
        </div>
        <div className="flex-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8">
          {games.map((game, index) => (
            <div key={index} className="mx-auto">
              <div className="flex flex-col items-center justify-center w-64 md:w-80 h-80 bg-red-900 rounded-lg text-center transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl shadow-lg mb-4">
                {" "}
                {/* Increased height and added margin bottom */}
                <h2 className="text-xl md:text-2xl font-bold mb-2 text-white">
                  {game.name}
                </h2>
                <div className="mb-4">
                  {game.men && (
                    <div className="flex flex-col items-center">
                      <h3 className="text-lg md:text-xl font-semibold text-white mr-2">
                        Men
                      </h3>
                      <p className="text-sm md:text-lg text-white">
                        Team Size: {game.men.teamSize || "N/A"}
                      </p>
                      <p className="text-sm md:text-lg text-white">
                        Entry Fees: {game.men.entryFees}
                      </p>
                    </div>
                  )}
                  {game.women && (
                    <div className="flex flex-col justify-between items-center mt-4">
                      <h3 className="text-lg md:text-xl font-semibold text-white mr-2">
                        Women
                      </h3>
                      <p className="text-sm md:text-lg text-white">
                        Team Size: {game.women.teamSize || "N/A"}
                      </p>
                      <p className="text-sm md:text-lg text-white">
                        Entry Fees: {game.women.entryFees}
                      </p>
                    </div>
                  )}
                </div>
                {/* Link to rules */}
                <a
                  href={game.rulesLink}
                  className="text-blue-200 hover:underline mt-2 text-base"
                  style={{ cursor: "pointer" }}
                >
                  View Rules
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 pl-16 hidden md:block">
          <img src="./icon2.png" alt="icon 2" />
        </div>
      </div>
    </div>
  );
}
