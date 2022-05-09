/* external imports */
import React, { useState, Link } from "react";
import { Routes, Route } from "react-router-dom";

/* internal imports */

import "./App.css";
/* import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const GET_WORKOUTS = gql`
  query MyQuery {
    workouts {
      duration
      name
      id
    }
  }
`; */

/* import programs from "./programs.json"; */

import WelcomeScreen from "./components/dashboard/WelcomeScreen";
import CurrentProgram from "./components/dashboard/CurrentProgram";
/* import RoundBox from "./components/generalComponents/RoundBox"; */
import NavigationIcons from "./components/generalComponents/Navigation/NavigationIcons";
import ProgramDetails from "./components/programs/ProgramDetails";
import ExerciseList from "./components/exerciseOverview/ExerciseOverview";

function App() {
  /* const { loading, error, data } = useQuery(GET_WORKOUTS);

  if (loading) return <p>Lädt...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data); */

  return (
    <>
      {/* <p><Link to="/ExerciseOverview">TEST LINK</Link></p> */}

      <body style={{ height: "100vh", background: "#202430" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="exerciseoverview" element={<ExerciseList />} />
        </Routes>
      </body>
    </>
  );
}
function Dashboard() {
  return (
    <>
      <div className="dashboard">
        {/* <p>
        {workouts.map((workout, i) => (
          <div key={i}>{workout.name}</div>
        ))}
      </p> 
      <ProgramDetails /> */}
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
    </>
  );
}

export default App;
