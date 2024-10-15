import React, { useEffect, useState } from "react";
import Script from "react-load-script";

const Timer = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [flipdownInstance, setFlipdownInstance] = useState(null);

  const handleScriptLoad = () => {
    setIsScriptLoaded(true);
  };

  useEffect(() => {
    if (isScriptLoaded && window.FlipDown) {
      const futureTime = Math.floor(
        new Date("2024-10-26T12:00:00").getTime() / 1000
      );

      // Initialize FlipDown only if not already initialized
      if (!flipdownInstance) {
        // Check if flipdown element already exists and remove it to avoid duplicates
        const existingFlipdown = document.getElementById("flipdown");
        if (existingFlipdown) {
          existingFlipdown.innerHTML = ""; // Clear any existing content
        }

        const flipdown = new window.FlipDown(futureTime).start().ifEnded(() => {
          document.getElementById(
            "flipdown"
          ).innerHTML = `<h2>Timer Ended</h2>`;
        });

        setFlipdownInstance(flipdown); // Store the instance
      }
    }

    return () => {
      // Cleanup the flipdown instance if it exists
      // if (flipdownInstance) {
      //   flipdownInstance.stop();
      // }
    };
  }, [isScriptLoaded, flipdownInstance]);

  return (
    <div className="timer">
      <style>
        {`
          /* Adjust the overall size of the flipdown container */
          #flipdown {
  // display: flex; /* Ensures the numbers are displayed in a row */
  width: 100vw; /* Set width to 80% of the viewport width */
  max-width: 600px; /* Maximum width for larger screens */
  margin: 0 auto; /* Center the element horizontally */
  padding: 0; /* Remove padding if necessary */
}


          // /* Style for the rotors (number boxes) */
          #flipdown .rotor {
            width: 10px; /* Adjust width of the rotor */
            height: 20px; /* Adjust height of the rotor */
            margin: 0 0px; /* Space between the rotors */
            border-radius: 10px; /* Rounded corners */
            display: flex;
            align-items: center; /* Center align the number vertically */
            justify-content: center; /* Center align the number horizontally */
            color:white;
          }

          // /* Style for the numbers */
          #flipdown .rotor .digit {
            font-size: 30px; /* Adjust font size of the number */
            color: white; /* Number color */
            font-weight: bold; /* Make the number bold */
          }
          #flipdown .rotor .heading {
  color: white !important; /* Force heading color to white */
  font-weight: bold; /* Optional: Make the heading bold */
  font-size: 16px; /* Adjust font size as needed */
  text-align: center; /* Center align the heading */
}
#flipdown .rotor-group-heading::before {
      color: white !important; /* Force the color to white */
      // content: ''; /* Ensure the ::before element renders */
      margin-bottom: 5px;
    }
    @media (max-width: 768px) {
            #flipdown .rotor-group {
              flex-direction: column; /* Stack vertically on smaller screens */
              align-items: center; /* Center items */
              margin-right:0px
            }
          }
}
        `}
      </style>
      <div id="flipdown" className="flipdown"></div>
      <Script
        url="https://cdn.jsdelivr.net/npm/flipdown@0.3.2/dist/flipdown.min.js"
        onLoad={handleScriptLoad}
      />
    </div>
  );
};

export default Timer;
