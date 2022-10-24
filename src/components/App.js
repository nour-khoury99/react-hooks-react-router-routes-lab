import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return <div>


    <Switch>
      <Route path="/navbar" exact element={NavBar}></Route>
      <Route path="/home" exact element={Home}></Route>
      <Route path="/actors" exact element={Actors}></Route>
      <Route path="/directors" exact element={Directors}></Route>
      <Route path="/movie" exact element={Movies}></Route>
    </Switch>
  </div>;
}

export default App;
