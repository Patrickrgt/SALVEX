import React, { Component } from "react";

import NumberFormat from "react-number-format";

import line from "../img/line.png";
import loading from "../img/loading.gif";

class Statistics extends Component {
  constructor() {
    super();
    this.state = {
      caseData: [],
      lastCaseData: 0,
      filledData: false,
      testData: ["orange", "apples", "watermellons"],
      states: 56,
      stateNum: 37,
      statesList: [
        "Alaska",
        "Alabama",
        "Arkansas",
        "American Samoa",
        "Arizona",
        "California",
        "Colorado",
        "Connecticut",
        "District of Columbia",
        "Delaware",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Iowa",
        "Idaho",
        "Illinois",
        "Indiana",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Massachusetts",
        "Maryland",
        "Maine",
        "Michigan",
        "Minnesota",
        "Missouri",
        "Northern Mariana Islands",
        "Mississippi",
        "Montana",
        "North Carolina",
        "North Dakota",
        "Nebraska",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "Nevada",
        "New York",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Virginia",
        "US Virgin Islands",
        "Vermont",
        "Washington",
        "Wisconsin",
        "West Virginia",
        "Wyoming",
      ],
    };
  }

  async componentDidMount() {
    await fetch("https://api.covidtracking.com/v1/states/current.json")
      .then((response) => response.json())
      .then((data) => this.setState({ caseData: data }))
      .then(() => {
        this.setState({ lastCaseData: this.state.caseData.length - 1 });
      })
      .then(() => {
        console.log(this.state.caseData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    await fetch("https://api.covidtracking.com/v1/us/current.json")
      .then((response) => response.json())
      .then((data) => this.setState({ usData: data }))
      .then(() => {
        console.log(this.state.usData);
      })
      .then(() => {
        this.setState({ filledData: true });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  changeState() {
    const stateIndex = document.getElementById("stateNum").value;
    this.setState({ stateNum: stateIndex });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          {/* header image */}
          <div
            className="col-xs-6 div-center mb-3 slide-left"
            style={{ marginTop: "80px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="228.185"
              height="25.553"
              viewBox="0 0 228.185 25.553"
            >
              <g
                id="undraw_data_reports_706v_1_"
                data-name="undraw_data_reports_706v (1)"
                transform="translate(-196.163 -155.194)"
                opacity="0.5"
              >
                <path
                  id="Path_179"
                  data-name="Path 179"
                  d="M781.977,474.859a.688.688,0,0,1-.78.343,25.411,25.411,0,0,0-6.176-.638c-16.715.295-29.566,13.751-45.91,15.763-14.736,1.813-28.605-5.353-42.461-9.1-7.2-1.946-14.621-2.979-22.03-1.656-7.351,1.308-14.25,4.316-21.178,6.985-6.671,2.569-13.6,4.958-20.826,5.077-7.941.133-15.092-3.14-22.458-5.634a39.989,39.989,0,0,0-11.819-2.427,35.753,35.753,0,0,0-11.648,1.8c-7.827,2.488-14.878,6.923-21.744,11.329a.61.61,0,0,1-.4.109.737.737,0,0,1-.314-1.342l.314-.2c1.575-1.013,3.159-2.022,4.758-3,6.828-4.187,14.136-8.1,22.1-9.554a33.293,33.293,0,0,1,11.41-.143,65.014,65.014,0,0,1,11.61,3.426,79.163,79.163,0,0,0,11.386,3.578,33.268,33.268,0,0,0,11.548.228c7.313-1.1,14.184-4.044,21.026-6.709,6.885-2.679,13.979-5.21,21.43-5.543,7.356-.333,14.621,1.408,21.6,3.569,14.231,4.4,28.762,10.929,43.831,6.452,15.3-4.539,29.376-17.643,46.334-13.755a.638.638,0,0,1,.4.252A.733.733,0,0,1,781.977,474.859Z"
                  transform="translate(-357.741 -316.073)"
                  fill="#6c63ff"
                />
                <circle
                  id="Ellipse_69"
                  data-name="Ellipse 69"
                  cx="3.331"
                  cy="3.331"
                  r="3.331"
                  transform="translate(224.399 163.758)"
                  fill="#6c63ff"
                />
                <circle
                  id="Ellipse_70"
                  data-name="Ellipse 70"
                  cx="3.331"
                  cy="3.331"
                  r="3.331"
                  transform="translate(308.616 159.476)"
                  fill="#6c63ff"
                />
                <circle
                  id="Ellipse_71"
                  data-name="Ellipse 71"
                  cx="3.331"
                  cy="3.331"
                  r="3.331"
                  transform="translate(411.389 155.194)"
                  fill="#6c63ff"
                />
              </g>
            </svg>
          </div>

          {/* header */}

          <div classMessage="row div-center my-3">
            <h1 className="header slide-right">
              An overview of disease <br></br>related statistics. <br></br>
            </h1>
          </div>

          {/* purple button */}
          <div className="row-transp">
            <div className="my-4 div-center">
              <button className="btn btn-prpl-wd fade-in-up">COVID-19</button>
            </div>
          </div>

          {this.state.filledData ? (
            <div>
              {/* Statistics Box USA*/}
              <div className="row mt-3">
                <img
                  className="slide-right"
                  src={line}
                  alt=""
                  style={{ position: "relative", margin: "auto" }}
                />
                <div className="row-transp div-center">
                  <h className="header-prpl fade-in">United States</h>
                </div>
              </div>

              <div className="row mx-2 ">
                <div className="col-4 fade-in-up-1b">
                  <div className="row">
                    <p className="body-grey"> Total Cases </p>
                  </div>
                  <div className="row">
                    <p className="body-grey">
                      <NumberFormat
                        value={this.state.usData[0].positive}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                      {/* {this.state.usData[0].positive}{" "} */}
                    </p>
                  </div>
                </div>

                <div className="col-4 fade-in-up-1s">
                  <div className="row">
                    <p className="body-grey"> Recovered </p>
                  </div>
                  <div className="row">
                    <p className="body-grey">
                      <NumberFormat
                        value={this.state.usData[0].recovered}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </p>
                  </div>
                </div>

                <div className="col-4 fade-in-up-0b">
                  <div className="row">
                    <p className="body-grey"> Deaths </p>
                  </div>
                  <div className="row">
                    <p className="body-grey">
                      <NumberFormat
                        value={this.state.usData[0].death}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </p>
                  </div>
                </div>
              </div>

              {/* Statistics Box NY*/}
              <div className="row mt-3">
                <img
                  src={line}
                  className="slide-right"
                  alt=""
                  style={{ position: "relative", margin: "auto" }}
                />
              </div>

              <div className="row-transp div-center block">
                <select
                  onChange={() => this.changeState()}
                  className="form-control form-control-lg select-prpl fade-in"
                  id="stateNum"
                >
                  {this.state.caseData.map((stateMap, index) => (
                    <option value={index}>
                      {this.state.statesList[index]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="row mx-2 ">
                <div className="col-4 fade-in-up-2s">
                  <div className="row">
                    <p className="body-grey"> Total Cases </p>
                  </div>
                  <div className="row">
                    <p className="body-grey">
                      <NumberFormat
                        value={
                          this.state.caseData[this.state.stateNum].positive
                        }
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </p>
                  </div>
                </div>

                <div className="col-4 fade-in-up-2b">
                  <div className="row">
                    <p className="body-grey"> Recovered </p>
                  </div>
                  <div className="row">
                    <p className="body-grey">
                      <NumberFormat
                        value={
                          this.state.caseData[this.state.stateNum].recovered
                        }
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </p>
                  </div>
                </div>

                <div className="col-4 fade-in-up-3s">
                  <div className="row">
                    <p className="body-grey"> Deaths </p>
                  </div>
                  <div className="row">
                    <p className="body-grey">
                      <NumberFormat
                        value={this.state.caseData[this.state.stateNum].death}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <img className="loading-gif fade-in" src={loading} alt="" />
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Statistics;
