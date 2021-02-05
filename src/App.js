import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Bootstrap from "./elements/bootstrap.jsx";
import Home from "./elements/home.jsx";
import NavBar from "./elements/navbar.jsx";
import Assessment from "./elements/assessment.jsx";
import Results from "./elements/results.jsx";
import News from "./elements/news.jsx";
import Trending from "./elements/trending.jsx";
import Local from "./elements/local.jsx";


import { Route, Switch, Redirect } from "react-router-dom";
import Statistics from "./elements/statistics.jsx";

function App() {
  return (
    <React.Fragment>

      <NavBar>
      </NavBar>

      <div>
        <Switch>

          <Route path="/home" component={Home} />
          <Route path="/assessment" component={Assessment}/>
          <Route path="/results" component={Results}/>
          <Route path="/news" component={News}/>
          <Route path="/trending" component={Trending}/>
          <Route path="/local" component={Local}/>
          <Route path="/statistics" component={Statistics}/>

        </Switch>
      </div>
      
    </React.Fragment>
  );
}

export default App;
