import React from "react";

const games = [
  {
    name: "Athletics",
    rulesLink:
      "https://drive.google.com/file/d/12BSyv7TBv40JdFBli_VyfCBu2VRjWmEo/view?usp=drive_link",
  },
  {
    name: "Badminton",
    rulesLink:
      "https://drive.google.com/file/d/1tTSw_fSmQWlQul_rO2sw2DCezEOjMgrL/view?usp=drive_link",
  },
  {
    name: "Basketball",
    rulesLink:
      "https://drive.google.com/file/d/1Fk-A1gkITQph3IMMS6wNVpgf1srJhdOp/view?usp=drive_link",
  },
  {
    name: "Chess",
    rulesLink:
      "https://drive.google.com/file/d/1NXPopGjVWRNyDXRiS1HxIwvZD9xAdXrw/view?usp=drive_link",
  },
  {
    name: "Cricket",
    rulesLink:
      "https://drive.google.com/file/d/1A0oMwyQMWGqyPHZFWJtIAARYo7N_guMP/view?usp=drive_link",
  },
  {
    name: "Football",
    rulesLink:
      "https://drive.google.com/file/d/1Fm_beTKObGpAaraTvPCH3E_3Ur1iflwm/view?usp=drive_link",
  },
  {
    name: "Hockey",
    rulesLink:
      "https://drive.google.com/file/d/1wUv3fMIv01eLv3U96gr3poAPcTMv5cCk/view?usp=drive_link",
  },
  {
    name: "Lawn Tennis",
    rulesLink:
      "https://drive.google.com/file/d/17NOZk6YkEmkXxp25ax2fktcD-3nahpBh/view?usp=drive_link",
  },
  {
    name: "Table Tennis",
    rulesLink:
      "https://drive.google.com/file/d/1E4ugFfOT4L97FdJHDt6fM74tswjCpHiO/view?usp=drive_link",
  },
  {
    name: "Volleyball",
    rulesLink:
      "https://drive.google.com/file/d/1CmI8WlcCHsY0jz3rSetmJ2T0fywRsTXx/view?usp=drive_link",
  },
];

export default function Rules() {
  return (
    <div className="container mx-auto px-6 py-12 bg-black">
      <h1
        className="text-4xl font-bold mb-8"
        style={{ color: "#f0f0f0", textShadow: "2px 2px 5px #b22222" }} // Whitish grey and red shadow
      >
        Rules and Regulations
      </h1>
      <div className="space-y-6">
        <section>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: "#f0f0f0", textShadow: "1px 1px 3px #b22222" }} // Whitish grey and red shadow
          >
            Match Rules
          </h2>
          <ul
            className="list-disc list-inside text-base"
             // Slightly larger font size
          >
            <li>
              Every player should have their hardcopy college ID card during the
              match or whenever asked for verification.
            </li>
            <li>
              No t-shirts would be allowed. Every player should have a proper
              jersey with name and number.
            </li>
            <li>
              All standard rules will be followed during the game unless
              modified by the organizers.
            </li>
            <li>Referee decision would be the final decision.</li>
            <li>
              Team and player would be immediately disqualified if found
              engaging in any form of malpractices or cheating.
            </li>
            <li>No objectionable accessories are allowed.</li>
            <li>
              The match schedule and pattern will be decided by the organizers;
              no modification requests will be entertained.
            </li>
          </ul>
        </section>

        {/* Detailed Rules Box */}
        <div
          className="p-6 mt-8 rounded-lg bg-red-900"
          style={{
            color: "#d3d3d3", // Greyish text color
            boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)", // Slight shadow for a pop effect
            textAlign: "left",
          }}
        >
          <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
            These rules will adhere to the standard regulations of each sport
            with any modifications specific to
            <strong> Rann-neeti' 2024</strong> clearly stated.
          </p>
        </div>

        {/* Render Games List */}
        <div className="mt-8">
          {games
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((game) => (
              <div
                key={game.name}
                className="flex flex-col sm:flex-row justify-start items-center mb-4"
                style={{
                  color: "#f0f0f0",
                  fontSize: "1.25rem",
                  textShadow: "1px 1px 2px #b22222",
                }}
              >
                {/* Set a fixed width for the game name to ensure alignment */}
                <span className="w-48 mb-2 sm:mb-0 pr-4">{game.name}</span>
                <a
                  href={game.rulesLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                  style={{
                    color: "#b22222",
                    textDecoration: "underline",
                    wordBreak: "break-word", // Ensures long URLs wrap on smaller screens
                  }}
                >
                  View Rules
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
