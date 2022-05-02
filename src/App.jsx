/* external imports */
import { useState } from "react";

/* internal imports */

import "./App.css";
/* import programs from "./programs.json"; */

import WelcomeScreen from "./components/dashboard/WelcomeScreen";
import CurrentProgram from "./components/dashboard/CurrentProgram";
/* import RoundBox from "./components/generalComponents/RoundBox"; */
import NavigationIcons from "./components/generalComponents/Navigation/NavigationIcons";
import ProgramDetails from "./components/programme/ProgramDetails";

function App() {
  return (
    <>
      <body style={{ height: "100vh", background: "#202430" }}>
        <div className="dashboard">
        <ProgramDetails />
          <WelcomeScreen username="Sina" />
          <CurrentProgram
            dayCount="2"
            programTitle="Titel des Programms"
            workoutDurance="26"
            workoutFocus="Beweglichkeit"
            /* placeholder, later unique workout within the program*/
          />
        </div>
        <div>
          <NavigationIcons />
        </div>
      </body>
    </>
  );
}

export default App;
