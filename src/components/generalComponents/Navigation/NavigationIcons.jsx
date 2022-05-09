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
      position: "absolute",
      left: "0%",
      right: "0%",
      bottom: "0%",
    }}
  >
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
    <a
      style={{
        marginLeft: "30vw",
        paddingTop: "4vh",
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
