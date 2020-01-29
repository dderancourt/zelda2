import React, { useState } from "react";
import Login from "../Components/Utilities/Login";
import SingUp from "../Components/Utilities/Signup";
import "./Style/Identification.scss";

function Identification() {
  const [createCount, setCreateCount] = useState(true);

  return (
    <div className="Page">
      <div className="identificationCard">
        <div>{createCount ? <Login /> : <SingUp />}</div>
        <p>no account ?</p>
        <button onClick={() => setCreateCount(!createCount)}>
          create an account
        </button>
      </div>
    </div>
  );
}

export default Identification;
