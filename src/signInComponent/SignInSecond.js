import React from "react";
import "../style/SignIn.css";

import signIn from "../images/login2.png";
import DropDown from "./DropDown";

import image from "../images/login2.png";
import code from "./code2.txt";
function SignInSecond() {
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

export default SignInSecond;
