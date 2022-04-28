/* external imports */
import { useState } from "react";

/* internal imports */

import "./App.css";
import GreetUser from "./components/dashboard/GreetUser";
import WorkoutToday from "./components/dashboard/WorkoutToday";
import CurrentProgram from "./components/dashboard/CurrentProgram";
import ExerciseOverview from "./components/exerciseOverview/ExerciseOverview";
import RoundBox from "./components/generalComponents/RoundBox";

function App() {
  return (
    <>
      <body style={{ height: "100%", background: "#202430" }}>
        <div className="dashboard">
          <GreetUser username="Sina" />
          <img
            className="image--centered"
            src="./components/dashboard/dashboardImages/StretchingCaricature.svg"
            alt="stretching caricature"
          />
          <WorkoutToday />
          <CurrentProgram />
        </div>

        <RoundBox text="100 Push-Ups Challenge" color="red" />
        <div>
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
          <div
            className="programOption"
            style={{
              background: "linear-gradient(315deg, #FF99C4 0%, #FFD162 100%)",
            }}
          >
            <ExerciseOverview programName="100 Push-Ups Challenge" />
          </div>

          <div
            className="programOption"
            style={{
              background: "linear-gradient(315deg, #F5FFA0 0%, #3EF3E8 100%)",
            }}
          >
            <ExerciseOverview programName="30 Min Yoga" />
          </div>
          <div
            className="programOption"
            style={{
              background:
                "linear-gradient(315deg, #3A4AE4 0%, #3B85E6 21.35%, #3EE4E8 73.44%, #3EF3E8 92.71%)",
            }}
          >
            <ExerciseOverview programName="Stretch and Relax" />
          </div>

          <div
            className="programOption"
            style={{
              background: "linear-gradient(315deg, #FF99C4 0%, #FFD162 100%)",
            }}
          >
            <ExerciseOverview programName="20 Min Pilates" />
          </div>
          <div
            className="programOption"
            style={{
              background: "linear-gradient(315deg, #F5FFA0 0%, #3EF3E8 100%)",
            }}
          >
            <ExerciseOverview programName="don't do anything for 7 minutes" />
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
