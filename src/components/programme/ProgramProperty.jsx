import programs from "../../programs.json";

const programID = new URLSearchParams(window.location.search).get("id");
const currentProgram = programs.filter(
  (program) => program.id === programID
)[0];

const ProgramProperty = ({ property }) => {
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <img src="/programImages/greyDot.png" alt="grey dot" />
    <p>{property}</p>
  </div>;
};

export default ProgramProperty;
