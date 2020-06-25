import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/main";
import Details from "./pages/details";
import List from "./pages/list";
import AutoSave from "./pages/autosave";
import history from "./history";

const App = () => (
  <div>
    <BrowserRouter>
      <div className="container">
        <Router history={history}>
          <Route exact path="/" component={Main} />
          <Route exact path="/auto/:id" component={Details} />
          <Route exact path="/list" component={List} />
          <Route exact path="/saveauto" component={AutoSave} />
        </Router>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
