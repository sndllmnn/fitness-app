// internal import
import programs from "../../programs.json";
import ProgramProperty from "./ProgramProperty";

const programID = new URLSearchParams(window.location.search).get("id");
const currentProgram = programs.filter(
  (program) => program.id === programID
)[0];

const ProgramDetails = () => {
  <div
    style={{
      background: "linear-gradient(315deg, #FF99C4 0%, #FFD162 100%)",
      height: "80vh",
    }}
  >
    <h1
      style={{
        color: "white",
        fontSize: "2.25rem",
        fontWeight: "bold",
        lineHeight: "3.375rem",
        textAlign: "center",
      }}
    >
      {currentProgram.title}
    </h1>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "90vw",
      }}
    >
      <ProgramProperty property={currentProgram.focus} />
      <ProgramProperty property={currentProgram.difficulty} />
      <ProgramProperty property={currentProgram.weeks} />
    </div>
  </div>;

  <div
    style={{
      background: "#3A4151",
      height: "40vh",
    }}
  >
    <p
      style={{
        color: "white",
        fontSize: "1rem",
        lineHeight: "1.313rem",
        padding: "2rem",
      }}
    >
      {currentProgram.description}
    </p>
  </div>;
};

/* const ProgramDetails = ({ programName }) => (
        const programDescription = 'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen.';
        const programDuration = 21;

      <div
      style={{
          background: 'background: linear-gradient(315deg, #FF99C4 0%, #FFD162 100%)'
      }}
      >
        <h1
        style={{
            color:'white',
            fontSize:'2.25rem',
            fontWeight:'bold',
            lineHeight:'3.375rem',
            textAlign:'center',
              }}
        >{programName}</h1>
      </div>
    ); */

export default ProgramDetails;
