import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import AboutMe from "../../Pages/AboutMe/AboutMe";
import TimeLine from "../../Pages/TimeLine/TimeLine";
import Contact from "../../Pages/Contact/Contact";
import NavBar from "../NavBar/NavBar";

export default function Routing() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact={true} component={Home}>
            <Home />
          </Route>
          <Route path="/AboutMe" exact={true} component={AboutMe}>
            <AboutMe />
          </Route>
          <Route path="/TimeLine" exact={true} component={TimeLine}>
            <TimeLine />
          </Route>
          <Route path="/Contact" exact={true} component={Contact}>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
