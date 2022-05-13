import React from "react";
import NavigationIcons from "../generalComponents/Navigation/NavigationIcons";

const ProfileInformation = () => {
  return (
    <>
      <h2
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: "1.5rem",
          marginLeft: "2rem",
          paddingTop: "2rem",
        }}
      >
        Name
      </h2>
      <div>
        <img
          className="image--centered"
          src="./components/profile/profilePicture.svg"
          alt="blue dot"
        />
      </div>

      <div>
        <NavigationIcons />
      </div>
    </>
  );
};

export default ProfileInformation;
