// external imports

import { useState } from "react";

// internal imports

import "./App.css";

function ExerciseList() {
  const ExerciseOption = ({ programName }) => (
    <div className="ExerciseOverview">
      <h2 className="h2__exerciseOverview">{programName}</h2>
    </div>
  );
  return (
    <>
      <body style={{ height: "100%", background: "#202430" }}>
        <h2
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "1.5rem",
            marginTop: "3rem",
            marginBottom: "3rem",
            marginLeft: "2rem",
          }}
        >
          Browse
        </h2>

        {/* FOR EACH FUNCTION?

  import programs from "../../programs.json";

   programs.forEach((program) => {
     <div
          className="programOption"
          style={{
            background: "linear-gradient(315deg, #FF99C4 0%, #FFD162 100%)",
          }}
        >

          <ExerciseOption programName="program.title" />
        </div>
     });
  
  
  
  
  */}
        <div
          className="programOption"
          style={{
            background: "linear-gradient(315deg, #FF99C4 0%, #FFD162 100%)",
          }}
        >
          <ExerciseOption programName="program." />
        </div>

        <div
          className="programOption"
          style={{
            background: "linear-gradient(315deg, #F5FFA0 0%, #3EF3E8 100%)",
          }}
        >
          <ExerciseOption programName="Yoga Journey" />
        </div>
        <div
          className="programOption"
          style={{
            background:
              "linear-gradient(315deg, #3A4AE4 0%, #3B85E6 21.35%, #3EE4E8 73.44%, #3EF3E8 92.71%)",
          }}
        >
          <ExerciseOption programName="Stretch and Relax" />
        </div>

        <div
          className="programOption"
          style={{
            background: "linear-gradient(315deg, #FF99C4 0%, #FFD162 100%)",
          }}
        >
          <ExerciseOption programName="Pilates Einführung" />
        </div>
        <div
          className="programOption"
          style={{
            background: "linear-gradient(315deg, #F5FFA0 0%, #3EF3E8 100%)",
          }}
        >
          <ExerciseOption programName="don't do anything for 7 minutes" />
        </div>
      </body>
    </>
  );
}

export default ExerciseList;
