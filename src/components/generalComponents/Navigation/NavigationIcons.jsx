const NavigationIcons = () => (
  <div
    style={{
      background: "#00000066",
      borderRadius: '20px 20px 0px 0px',
      display: "flex",
      height: "10vh",
      justifyContent: "center",
      position: "absolute",
      left: '0%',
      right: '0%',
      bottom: '0%',


    }}
  >
    <a
      style={{
        marginRight: "30vw",
        paddingTop: '4vh',
      }}
      href="./components/exerciseOverview/ExerciseOverview.jsx"
    >
      <img
        src="./components/generalComponents/Navigation/navigationIcons/homeIcon.png"
        alt="home icon"
      />
    </a>
    <a
    style={{
    paddingTop: '4vh',
    }}
>
      <img
        src="./components/generalComponents/Navigation/navigationIcons/handlebarIcon.png"
        alt="hanldebar icon"
      />
    </a>
    <a
      style={{
        marginLeft: "30vw",
        paddingTop: '4vh',

      }}
    >
      <img
        src="./components/generalComponents/Navigation/navigationIcons/userIcon.png"
        alt="user profile icon"
      />
    </a>
    ;
  </div>
);

export default NavigationIcons;
