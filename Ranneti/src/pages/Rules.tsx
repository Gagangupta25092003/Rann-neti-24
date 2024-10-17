import React from "react";

export default function Rules() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1
        className="text-5xl font-bold mb-8"
        style={{ color: "#f0f0f0", textShadow: "2px 2px 5px #b22222" }} // Whitish grey and red shadow
      >
        Rules and Regulations
      </h1>
      <div className="space-y-6">
        <section>
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: "#f0f0f0", textShadow: "1px 1px 3px #b22222" }} // Whitish grey and red shadow
          >
            Match Rules
          </h2>
          <ul
            className="list-disc list-inside text-lg"
            style={{
              color: "#f0f0f0",
              textShadow: "1px 1px 2px #b22222",
              fontSize: "1.25rem",
            }} // Slightly larger font size
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
          className="p-6 mt-8 rounded-lg bg-gradient-to-r from-red-800 to-black"
          style={{
            // backgroundColor: "#2e0e0e", // Darker reddish-black background
            color: "#d3d3d3", // Greyish text color
            boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)", // Slight shadow for a pop effect
            textAlign: "left",
          }}
        >
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              marginBottom: "0.5rem",
            }}
          >
            <strong>Detailed Rules: </strong>
            Detailed rules for each game will be provided to the team captains
            before the start of the tournament.
          </p>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
            These rules will adhere to the standard regulations of each sport
            with any modifications specific to
            <strong> Rann-neti' 2024</strong> clearly stated.
          </p>
        </div>
      </div>
    </div>
  );
}
