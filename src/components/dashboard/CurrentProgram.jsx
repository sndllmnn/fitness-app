const CurrentProgram = () => {

const dayCount = 2;
const programTitle = 'Titel des Programms';
const workoutDurance = 26;
const workoutFocus = 'Beweglichkeit';
 return (
  <div className="currentProgram"
  style={{background: "#3A4151"
}}
    >
    <h3 className="h3 h3__dashboard text__dashboard">Tag {dayCount}</h3>
    <h2 className="h2 h2__dashboard text__dashboard">{programTitle}</h2>
    <p className="p p__dashboard text__dashboard"> {workoutDurance} Min. · {workoutFocus} </p>

  </div> 
 )}

export default CurrentProgram;

