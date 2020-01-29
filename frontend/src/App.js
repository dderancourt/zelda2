import React from "react";
import { Switch, Route } from "react-router-dom";
import identification from "./Pages/Identification";
import Game from "./Pages/Game";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={identification} />
        <Route path="/game" component={Game} />
      </Switch>
    </div>
  );
}

export default App;
