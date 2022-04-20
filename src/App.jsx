import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import GreetUser from "./components/dashboard/GreetUser";
import WorkoutToday from "./components/dashboard/WorkoutToday";
import ProgramOverview from "./components/dashboard/ProgramOverview";

function App() {
  return (
    /* doesn't work yet */
    <div className="dashboard">
    <GreetUser></GreetUser>
      <WorkoutToday></WorkoutToday>
      <ProgramOverview></ProgramOverview>
      </div>
  )}
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <p>
          <button
            type="button"
            onClick={() => setCount((currentCount) => currentCount + 1)}
          >
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div> */

export default App;
