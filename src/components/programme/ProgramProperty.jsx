import programs from "../../programs.json";
import greyDot from "./programImages/greyDot.png";

const programID = new URLSearchParams(window.location.search).get("id");
const currentProgram = programs.filter(
  (program) => program.id === programID
)[0];

const ProgramProperty = ({ property, type }) => 
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <img src={greyDot} alt="grey dot" />
    {/* <p>{property}</p> {type === "weeks" && property > 1 ? <span>Wochen</span> : <span>Woche</span>} */}
  </div>;
;

export default ProgramProperty;
