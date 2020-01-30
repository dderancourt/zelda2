import React from "react";
import { Switch, Route } from "react-router-dom";
import Identification from "./Pages/Identification";
import GamePage from "./Pages/GamePage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/gamepage" component={GamePage} />
        <Route exact path="/" component={Identification} />
      </Switch>
    </div>
  );
}

export default App;
