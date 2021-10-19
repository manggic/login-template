import React from "react";
import "../style/SignIn.css";

import signIn from "../images/login3.png";
import DropDown from "./DropDown";

import image from "../images/login3.png";
import code from "./code3.txt";
function SignInThree() {
  return (
    <div className="signIn">
      <DropDown image={image} code={code} />
      <img
        style={{ height: "90%", width: "60%", marginTop: "10px" }}
        src={signIn}
      />
    </div>
  );
}

export default SignInThree;
