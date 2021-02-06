import React, { Component } from "react";

import webmd from "../img/webmd.png";
import line from "../img/line.png";

class Local extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row-local div-center mb-4">
            <h1 className="header mb-0" style={{ fontWeight: "bold" }}>
              local
            </h1>
          </div>

          <div className="row">
            <div className="row-prpl">
              <div className="col-xs-3">
                <img
                  src={webmd}
                  alt=""
                  style={{
                    position: "relative",
                    float: "left",
                    padding: "2%1%",
                  }}
                />
              </div>

              <div className="col-xs-9">
                <h className="result-header">Dyspnea (Shortness of Breath)</h>
                <p className="result-text">
                  Dyspnea, or shortness of breath, can be a warning sign of a
                  health problem. Learn more about dyspnea symptoms, causes, and
                  treatments.
                </p>
              </div>
            </div>
          </div>

          <div className="row my-3">
            <img
              src={line}
              alt=""
              style={{ position: "relative", margin: "auto" }}
            />
          </div>

          <div className="row">
            <div className="row-prpl">
              <div className="col-xs-3">
                <img
                  src={webmd}
                  alt=""
                  style={{
                    position: "relative",
                    float: "left",
                    padding: "2%1%",
                  }}
                />
              </div>

              <div className="col-xs-9">
                <h className="result-header">Dyspnea (Shortness of Breath)</h>
                <p className="result-text">
                  Dyspnea, or shortness of breath, can be a warning sign of a
                  health problem. Learn more about dyspnea symptoms, causes, and
                  treatments.
                </p>
              </div>
            </div>
          </div>

          <div className="row my-3">
            <img
              src={line}
              alt=""
              style={{ position: "relative", margin: "auto" }}
            />
          </div>

          <div className="row">
            <div className="row-prpl">
              <div className="col-xs-3">
                <img
                  src={webmd}
                  alt=""
                  style={{
                    position: "relative",
                    float: "left",
                    padding: "2%1%",
                  }}
                />
              </div>

              <div className="col-xs-9">
                <h className="result-header">Dyspnea (Shortness of Breath)</h>
                <p className="result-text">
                  Dyspnea, or shortness of breath, can be a warning sign of a
                  health problem. Learn more about dyspnea symptoms, causes, and
                  treatments.
                </p>
              </div>
            </div>
          </div>

          <div className="row my-3">
            <img
              src={line}
              alt=""
              style={{ position: "relative", margin: "auto" }}
            />
          </div>
          <div className="row">
            <div className="row-prpl">
              <div className="col-xs-3">
                <img
                  src={webmd}
                  alt=""
                  style={{
                    position: "relative",
                    float: "left",
                    padding: "2%1%",
                  }}
                />
              </div>

              <div className="col-xs-9">
                <h className="result-header">Dyspnea (Shortness of Breath)</h>
                <p className="result-text">
                  Dyspnea, or shortness of breath, can be a warning sign of a
                  health problem. Learn more about dyspnea symptoms, causes, and
                  treatments.
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="107"
              height="25"
              viewBox="0 0 107 25"
              style={{ position: "relative", margin: "auto" }}
            >
              <g
                id="Ellipse_46"
                data-name="Ellipse 46"
                transform="translate(41)"
                fill="none"
                stroke="#b4b0ff"
                stroke-width="1"
              >
                <circle cx="12.5" cy="12.5" r="12.5" stroke="none" />
                <circle cx="12.5" cy="12.5" r="12" fill="none" />
              </g>
              <g
                id="Ellipse_47"
                data-name="Ellipse 47"
                transform="translate(82)"
                fill="none"
                stroke="#b4b0ff"
                stroke-width="1"
              >
                <circle cx="12.5" cy="12.5" r="12.5" stroke="none" />
                <circle cx="12.5" cy="12.5" r="12" fill="none" />
              </g>
              <g
                id="Ellipse_48"
                data-name="Ellipse 48"
                fill="#b4b0ff"
                stroke="#b4b0ff"
                stroke-width="1"
              >
                <circle cx="12.5" cy="12.5" r="12.5" stroke="none" />
                <circle cx="12.5" cy="12.5" r="12" fill="none" />
              </g>
            </svg>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Local;
