import React from "react";
import { Switch, Route } from "react-router-dom";
import Identification from "./Pages/Identification";
import Game from "./Pages/Game";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/game" component={Game} />
        <Route exact path="/" component={Identification} />
      </Switch>
    </div>
  );
}

export default App;
