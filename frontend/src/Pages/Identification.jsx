import React, { useState } from "react";
import Login from "../Components/Utilities/Login";
import SingUp from "../Components/Utilities/Signup";
import "./Style/Identification.scss";

function Identification() {
  const [createAccount, setCreateAccount] = useState(true);

  return (
    <div className="Page">
      <div className="identificationCard">
        <div>{createAccount ? <Login /> : <SingUp />}</div>
        <p>no account ?</p>
        {createAccount ? (
          <button onClick={() => setCreateAccount(!createAccount)}>
            create an account
          </button>
        ) : (
          <button onClick={() => setCreateAccount(!createAccount)}>
            I have an account
          </button>
        )}
      </div>
    </div>
  );
}

export default Identification;
