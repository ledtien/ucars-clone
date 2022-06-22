import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import BrandDetail from "./pages/BrandDetail/BrandDetail";
import CarBrands from "./pages/CarBrands/CarBrands";
import HomePage from "./pages/HomePage/HomePage";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

function App() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/brand" component={CarBrands} />
          <Route exact path="/brand/:id" component={BrandDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
