import React from "react";
import { Switch, Route } from "react-router-dom";
import Identification from "./Pages/Identification";
import GamePage from "./Pages/GamePage";
import Profile from "./Pages/Profile";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/gamepage" component={GamePage} />
        <Route exact path="/" component={Identification} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
