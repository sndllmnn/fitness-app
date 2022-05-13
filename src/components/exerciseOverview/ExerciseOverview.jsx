// external imports

import NavigationIcons from "../generalComponents/Navigation/NavigationIcons";

// internal imports
import UserProfile from "../profile/UserProfile";

function ExerciseList() {
  const ExerciseOption = ({ programName }) => (
    <div className="ExerciseOverview">
      <h2 className="h2__exerciseOverview">{programName}</h2>
    </div>
  );
  return (
    <>
      <h2
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: "1.5rem",
          marginLeft: "2rem",
        }}
      >
        Browse
      </h2>

      {/* kompletter Hintergrund dunkelblau */}
      <div
        style={{
          background: "rgb(32, 36, 48)",
        }}
      >
        <div
          className="programOption bg-grOrange "
          style={{
            background: "linear-gradient(315deg, #FF99C4 0%, #FFD162 100%)",
          }}
        >
          <ExerciseOption programName="Warm-Up" />
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
          className="programOption    "
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
          /* className="pb-100" doesn't work */
          style={{
            paddingBottom: "5rem",
          }}
        >
          <div
            className="programOption"
            style={{
              background: "linear-gradient(315deg, #F5FFA0 0%, #3EF3E8 100%)",
            }}
          >
            <ExerciseOption programName="don't do anything for 7 minutes" />
          </div>
        </div>
        <div>
          <NavigationIcons
            style={{
              position: "fixed",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default ExerciseList;
