
    const programOverview = ({ programName }) => (
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
    );
    
  
  export default programOverview;

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
        <p className="p p__dashboard text__dashboard"> {workoutDurance} Min. · {workoutFocus} </p>
    
      </div> 
     )}
    
    export default CurrentProgram;
    
    
  