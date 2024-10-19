import React from "react";

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
          className="p-6 mt-8 rounded-lg text-base bg-red-900"
          
        >
          <p
          >
            <strong>Detailed Rules: </strong>
            Detailed rules for each game will be provided to the team captains
            before the start of the tournament.
          </p>
          <p >
            These rules will adhere to the standard regulations of each sport
            with any modifications specific to
            <strong> Rann-Neeti' 2024</strong> clearly stated.
          </p>
        </div>
      </div>
    </div>
  );
}
