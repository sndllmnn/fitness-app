const CurrentProgram = (props) => {


 return (
  <div className="currentProgram"
  style={{background: "#3A4151"
}}
    >
    <h3 className="h3 h3__dashboard text__dashboard">Tag {props.dayCount}</h3>
    <h2 className="h2 h2__dashboard text__dashboard">{props.programTitle}</h2>
    <p className="p p__dashboard text__dashboard"> {props.workoutDurance} Min. · {props.workoutFocus} </p>

  </div> 
 )}

export default CurrentProgram;

