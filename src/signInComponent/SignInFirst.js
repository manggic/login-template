import React from "react";
import "../style/SignIn.css";

import signIn from "../images/login1.png";
import DropDown from "./DropDown";

import image from "../images/login1.png";
import code from "./code1.txt";
function SignInFirst() {
  return (
    <div className="signIn">
      <DropDown image={image} code={code} />
      <img
        style={{
          height: "90%",
          width: "60%",
          marginTop: "10px",
        }}
        src={signIn}
      />
    </div>
  );
}

export default SignInFirst;
