/*const Username = () => {
    Username = window.prompt('Wie heißt du?', 'Gib hier deinen Namen ein!');
    Username = firstCapitalLetter+(Username.slice(1).toLowerCase());
    console.log(Username);
} 

const GreetUser = ({username}) => 
    <h1 className="h1 h1__dashboard text__dashboard">Hi {username}!</h1> */

function WelcomeScreen(props) {
  return (
    <>
      <h1 className="h1 h1__dashboard text__dashboard">Hi {props.username}!</h1>
      <img
        className="image--centered"
        src="./components/dashboard/dashboardImages/StretchingCaricature.svg"
        alt="stretching caricature"
      />

      <div
        className="workoutOverview"
        style={{ width: "100vw", justifyContent: "space-between" }}
      >
        <h2
          className="h2__dashboard text__dashboard"
          style={{
            alignItems: "baseline",
            marginTop: "1rem",
            marginBottom: "1rem",
            marginLeft: "2rem",
          }}
        >
          Dein Workout heute
        </h2>
        <p
          className="p__dashboard text__dashboard"
          style={{ marginRight: "1rem", fontSize: "1.2rem", padding: "2.2rem" }}
        >
          Trainingsplan
        </p>
      </div>
    </>
  );
}

export default WelcomeScreen;
