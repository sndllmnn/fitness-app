const WorkoutToday = () => (
  <div
    className="workoutOverview"
    style={{ width: "100vw", justifyContent: "space-between" }}
  >
    <h2
      className="h2__dashboard text__dashboard"
      style={{ marginTop: "1rem", marginBottom: "1rem", marginLeft: "2rem" }}
    >
      Dein Workout heute
    </h2>
    <p
      className="p p__dashboard text__dashboard"
      style={{ marginRight: "1rem", fontSize: "1.2rem", padding: "2.2rem" }}
    >
      Trainingsplan
    </p>
  </div>
);

export default WorkoutToday;
