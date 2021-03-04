import React from "react";

import "./App.css";

import Home from "./elements/home.jsx";
import NavBar from "./elements/navbar.jsx";
import Assessment from "./elements/assessment.jsx";
import Results from "./elements/results.jsx";
import News from "./elements/news.jsx";
import Trending from "./elements/trending.jsx";
import Local from "./elements/local.jsx";

import { Route, Switch } from "react-router-dom";
import Statistics from "./elements/statistics.jsx";

import qrcode from "./img/qrcode.png";

function App() {
  return (
    <React.Fragment>
      <div>
        {window.innerWidth > 758 ? (
          <main className="screen-contain">
            <div className="screen-text">
              The SALVEX application currently works on mobile viewing screens.
              Please scan the QR code below with your mobile device to be
              redirected to the mobile site.
            </div>

            <div>
              <img
                className="screen-qr"
                src={qrcode}
                alt="QR Code that you can scan with your phone to get on our mobile site."
              />
            </div>
          </main>
        ) : (
          <div>
            <NavBar></NavBar>

            <div>
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/assessment" component={Assessment} />
                <Route path="/results" component={Results} />
                <Route path="/news" component={News} />
                <Route path="/trending" component={Trending} />
                <Route path="/local" component={Local} />
                <Route path="/statistics" component={Statistics} />
              </Switch>
            </div>

            <div>
              {window.location.href === "https://www.asksalvex.com/" ? (
                <main className="credits-contain">
                  <h1 className="credits-title">SLAVEX TEAM</h1>
                  <h2 className="credits">Maria-Victoria Vladucu</h2>
                  <h3 className="credits-sub">
                    UI Design &amp; Development, Data Design
                  </h3>
                  <h2 className="credits">Matthew Wissell</h2>
                  <h3 className="credits-sub">
                    Data Design &amp; Development, Algorithm Design
                  </h3>
                  <h2 className="credits">Patrick Torres</h2>
                  <h3 className="credits-sub">
                    UI Design &amp; Development, Algorithm Design &amp;
                    Development, Integration{" "}
                  </h3>
                  <h2 className="credits">Isabella Soldati Mol</h2>
                  <h3 className="credits-sub">
                    UI Design &amp; Development, Algorithm Design
                  </h3>
                </main>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default App;
