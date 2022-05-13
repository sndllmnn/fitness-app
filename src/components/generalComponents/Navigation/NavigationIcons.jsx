/* import { ReactComponent as HomeLogo } from './homeIcon.svg' */
import { Link } from "react-router-dom";


const NavigationIcons = () => (
  <div
    style={{
      background: "#00000066",
      borderRadius: "20px 20px 0px 0px",
      display: "flex",
      height: "10vh",
      justifyContent: "center",
      position: "fixed",
      left: "0%",
      right: "0%",
      bottom: "0vh",
    }}
  >

  {/* home icon */}
   <Link to="/"
      style={{
        marginRight: "30vw",
        paddingTop: "4vh",
      }}
      
    >

     <img
        src="./components/generalComponents/Navigation/navigationIcons/homeIcon.png"
        alt="home icon"
      />
    </Link> 

  {/* exercise overview icon */}
    <Link to="exerciseoverview"
      style={{
        paddingTop: "4vh",
      }}
    >
      <img
        src="./components/generalComponents/Navigation/navigationIcons/handlebarIcon.png"
        alt="hanldebar icon"
      />
    </Link>

      {/* user profile icon */}

    <Link to="userprofile"
      style={{
        marginLeft: "30vw",
        paddingTop: "4vh",
      }}
    >
      <img
        src="./components/generalComponents/Navigation/navigationIcons/userIcon.png"
        alt="user profile icon"
      />
    </Link>
    ;
  </div>
);

export default NavigationIcons;
