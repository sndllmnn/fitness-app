/* external imports */
import { useState } from "react";

/* internal imports */

import "./App.css";
import GreetUser from "./components/dashboard/GreetUser";
import WorkoutToday from "./components/dashboard/WorkoutToday";
import CurrentProgram from "./components/dashboard/CurrentProgram";
/* import RoundBox from "./components/generalComponents/RoundBox"; */
import NavigationIcons from "./components/generalComponents/Navigation/NavigationIcons";

function App() {
  return (
    <>
      <body style={{ height: "100vh", background: "#202430" }}>
        <div className="dashboard">
          <GreetUser username="Sina" />
          <img
            className="image--centered"
            src="./components/dashboard/dashboardImages/StretchingCaricature.svg"
            alt="stretching caricature"
          />
          <WorkoutToday />
          <CurrentProgram 
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
