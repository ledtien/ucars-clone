import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CarBrands from "./pages/CarBrands/CarBrands";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/brand" component={CarBrands} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
