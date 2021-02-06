import React, { Component } from "react";

class NavBar extends Component {
  hideBtn() {
    if (document.getElementById("hamburguer").style.display == "inline") {
      document.getElementById("hamburguer").style.display = "none";
    } else {
      document.getElementById("hamburguer").style.display = "inline";
    }
  }

  state = {};
  render() {
    return (
      <React.Fragment>
        <nav id="navbar">
          <div
            className="navbar-hamburger"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
            aria-controls="collapsibleNavbar"
            aria-expanded="false"
            onClick={() => this.hideBtn()}
          >
            <svg
              id="hamburguer"
              style={{ display: "inline" }}
              class="my-3"
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="27"
              viewBox="0 0 34 27"
            >
              <g
                id="Component_1_1"
                data-name="Component 1 – 1"
                transform="translate(2.5 2.5)"
              >
                <line
                  id="Line_13"
                  data-name="Line 13"
                  x2="29"
                  fill="none"
                  stroke="#b4b0ff"
                  stroke-linecap="round"
                  stroke-width="5"
                />
                <line
                  id="Line_14"
                  data-name="Line 14"
                  x2="29"
                  transform="translate(0 11)"
                  fill="none"
                  stroke="#b4b0ff"
                  stroke-linecap="round"
                  stroke-width="5"
                />
                <line
                  id="Line_15"
                  data-name="Line 15"
                  x2="29"
                  transform="translate(0 22)"
                  fill="none"
                  stroke="#b4b0ff"
                  stroke-linecap="round"
                  stroke-width="5"
                />
              </g>
            </svg>
          </div>

          <div id="collapsibleNavbar" class="collapse div-center">
            <div
              class="row bg-purple slide-down"
              style={{
                position: "fixed",
                top: "0",
                width: "112%",
                height: "40px",
              }}
            ></div>
            <div
              class="row slide-right"
              style={{ position: "fixed", top: "0", width: "108%" }}
            >
              <div className="col">
                <div
                  type="button"
                  align="right"
                  onClick={() => {
                    window.location.href = "./statistics";
                  }}
                >
                  <svg
                    id="Component_5_1"
                    data-name="Component 5 – 1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="72"
                    height="72"
                    viewBox="0 0 72 72"
                  >
                    <rect
                      id="Rectangle_144"
                      data-name="Rectangle 144"
                      width="72"
                      height="72"
                      rx="10"
                      fill="#b4b0ff"
                    />
                    <path
                      id="insights"
                      d="M20.27,3.5A1.631,1.631,0,0,1,21.9,5.131V38.847a1.631,1.631,0,1,1-3.263,0V5.131A1.631,1.631,0,0,1,20.27,3.5Zm14.139,7.885a1.631,1.631,0,0,1,1.631,1.631V38.847a1.631,1.631,0,1,1-3.263,0V13.017A1.631,1.631,0,0,1,34.409,11.385ZM6.131,19.814a1.631,1.631,0,0,1,1.631,1.631v17.4a1.631,1.631,0,1,1-3.263,0v-17.4A1.631,1.631,0,0,1,6.131,19.814Z"
                      transform="translate(15.459 8.29)"
                      fill="#fff"
                      fill-rule="evenodd"
                    />
                    <text
                      id="statistics"
                      transform="translate(35.5 65)"
                      fill="#fff"
                      font-size="10"
                      font-family="Helvetica-Bold, Helvetica"
                      font-weight="700"
                    >
                      <tspan x="-21.677" y="0">
                        statistics
                      </tspan>
                    </text>
                  </svg>
                </div>
              </div>
              <div className="col">
                <div
                  type="button"
                  onClick={() => {
                    window.location.href = "./assessment";
                  }}
                >
                  <svg
                    id="Component_3_1"
                    data-name="Component 3 – 1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="72"
                    height="72"
                    viewBox="0 0 72 72"
                  >
                    <rect
                      id="Rectangle_145"
                      data-name="Rectangle 145"
                      width="72"
                      height="72"
                      rx="10"
                      fill="#b4b0ff"
                    />
                    <text
                      id="assessment"
                      transform="translate(35.5 65)"
                      fill="#fff"
                      font-size="10"
                      font-family="Helvetica-Bold, Helvetica"
                      font-weight="700"
                    >
                      <tspan x="-28.63" y="0">
                        assessment
                      </tspan>
                    </text>
                    <g id="clippy" transform="translate(16.959 10)">
                      <path
                        id="Path_164"
                        data-name="Path 164"
                        d="M8.25,2.91a1.329,1.329,0,0,1-.842,1.682l-1.446.482a.443.443,0,0,0-.3.42V36.122a.443.443,0,0,0,.443.443H31.8a.443.443,0,0,0,.443-.443V5.492a.443.443,0,0,0-.3-.418L30.5,4.592a1.33,1.33,0,1,1,.84-2.524l1.446.484a3.1,3.1,0,0,1,2.122,2.941v30.63a3.1,3.1,0,0,1-3.1,3.1H6.1a3.1,3.1,0,0,1-3.1-3.1V5.492A3.1,3.1,0,0,1,5.121,2.55l1.447-.482A1.329,1.329,0,0,1,8.25,2.91Z"
                        transform="translate(0 1.545)"
                        fill="#fff"
                        fill-rule="evenodd"
                      />
                      <path
                        id="Path_165"
                        data-name="Path 165"
                        d="M7,3.1A3.1,3.1,0,0,1,10.1,0H21.624a3.1,3.1,0,0,1,3.1,3.1V5.761a3.1,3.1,0,0,1-3.1,3.1H10.1A3.1,3.1,0,0,1,7,5.761Zm3.1-.443a.443.443,0,0,0-.443.443V5.761A.443.443,0,0,0,10.1,6.2H21.624a.443.443,0,0,0,.443-.443V3.1a.443.443,0,0,0-.443-.443Z"
                        transform="translate(3.09 0)"
                        fill="#fff"
                        fill-rule="evenodd"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="col" align="left">
                <div
                  type="button"
                  onClick={() => {
                    window.location.href = "./news";
                  }}
                >
                  <svg
                    id="Component_4_1"
                    data-name="Component 4 – 1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="72"
                    height="72"
                    viewBox="0 0 72 72"
                  >
                    <rect
                      id="Rectangle_146"
                      data-name="Rectangle 146"
                      width="72"
                      height="72"
                      rx="10"
                      fill="#b4b0ff"
                    />
                    <path
                      id="globe"
                      d="M21.385,1A20.385,20.385,0,1,0,41.769,21.385,20.385,20.385,0,0,0,21.385,1ZM3.8,20.458H12.6a28.966,28.966,0,0,1,5.952-16.45A17.608,17.608,0,0,0,3.8,20.458Zm8.839,2.78H3.876A17.614,17.614,0,0,0,18.549,38.761a29.09,29.09,0,0,1-2.074-3.1A28.579,28.579,0,0,1,12.643,23.238Zm2.787,0H27.339a25.756,25.756,0,0,1-3.451,11.028,25.506,25.506,0,0,1-2.416,3.484l-.087.109-.087-.106A26.211,26.211,0,0,1,15.43,23.238Zm11.96-2.78H15.378A25.691,25.691,0,0,1,18.881,8.5,25.507,25.507,0,0,1,21.3,5.019l.087-.109.087.106A25.794,25.794,0,0,1,23.888,8.5a25.706,25.706,0,0,1,3.5,11.956Zm2.735,2.78a28.555,28.555,0,0,1-3.832,12.423,29.026,29.026,0,0,1-2.072,3.1A17.614,17.614,0,0,0,38.891,23.238H30.124Zm8.839-2.78H30.172a28.48,28.48,0,0,0-3.879-13.35,28.734,28.734,0,0,0-2.074-3.1A17.608,17.608,0,0,1,38.965,20.458Z"
                      transform="translate(15 9)"
                      fill="#fff"
                      fill-rule="evenodd"
                    />
                    <text
                      id="news"
                      transform="translate(36.5 65)"
                      fill="#fff"
                      font-size="10"
                      font-family="Helvetica-Bold, Helvetica"
                      font-weight="700"
                    >
                      <tspan x="-12.505" y="0">
                        news
                      </tspan>
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
