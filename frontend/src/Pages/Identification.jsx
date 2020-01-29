import React, { useState } from "react";
import Login from "../Components/Utilities/Login";
import SingUp from "../Components/Utilities/Signup";

function Identification() {
  const [createCount, setCreateCount] = useState(true);

  return (
    <div>
      <div>{createCount ? <Login /> : <SingUp />}</div>
      <p>no account ?</p>
      <button onClick={() => setCreateCount(!createCount)}>
        create an account
      </button>
    </div>
  );
}

export default Identification;
