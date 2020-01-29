import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/game" component={Game} />
      </Switch>
    </div>
  );
}

export default App;
