import React, { useState } from "react";
import Login from "../Components/Utilities/Login";
import SingUp from "../Components/Utilities/Signup";

export default function identification() {
  const [createCount, setCreateCount] = useState([]);

  return (
    <div>
      <div>{createCount ? <Login /> : <SingUp />}</div>
      <p>no account ?</p>
      <button onClick={setCreateCount(!createCount)}>create and account</button>
    </div>
  );
}
