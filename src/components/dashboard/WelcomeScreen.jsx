/* external imports */
import { visitWithTypeInfo } from "graphql";
import React, { useState } from "react";

function WelcomeScreen(props) {
  const [username, setUsername] = useState(props.username);

  const changeUsername = () => {
    setUsername(prompt("Gib hier deinen Namen ein!"));
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <h1 className="h1__dashboard text__dashboard">Hi {username}!</h1>
       
        <button
          onClick={changeUsername}
          style={{
            height: "2.25rem",
            marginLeft: "2rem",
            marginRight: "2rem",
          }}
        >
          Namen ändern!
        </button>
      </div>
      <img
        className="image--centered"
        src="./components/dashboard/dashboardImages/StretchingCaricature.svg"
        alt="stretching caricature"
      />

      <div
        className="workoutOverview"
        style={{
          alignItems: "center",
          display: "flex",
          width: "100vw",
          justifyContent: "space-between",
        }}
      >
        }
        <h2
          className="h2__dashboard text__dashboard"
          style={{
            alignItems: "center",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          Dein Workout heute
        </h2>
        <p
          className="p__dashboard text__dashboard"
          style={{
            fontSize: "1.2rem",
            padding: "2.2rem",
          }}
        >
          Trainingsplan
        </p>
      </div>
    </>
  );
}

export default WelcomeScreen;
