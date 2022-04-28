const RoundBox = ({text, color}) => (
  <div
    style={{
      background: {color},
      borderRadius: "1rem",
      display: "flex",
      flexDirection: "column",
      height: "30vh",
      justifyContent: "center",
      marginTop: "2rem",
      marginRight: "auto",
      marginBottom: "2rem",
      marginLeft: "auto",
      width: "90vw",
    }}
  >
    <h2
      style={{
        color: "white",
        fontSize: "1.5rem",
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      {text}
    </h2>
  </div>
);

export default RoundBox;
