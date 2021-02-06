import React, { Component } from "react";

class News extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row div-center mt-3">
            {/* header */}

            <h1 className="header fade-in-down" style={{ marginTop: "80px" }}>
              Catch up on the news.
            </h1>
          </div>

          {/* clipboard image on the background */}

          <div className="row-news div-center fade-in">
            {/* purple button */}
            <div className="row-transp">
              <button
                className="btn btn-prpl-center mt-5 fade-in-up"
                onClick={() => {
                  window.location.href = "./trending";
                }}
              >
                trending
              </button>

              {/* <div className="my-5 div-center">
                            <button className="btn btn-prpl-center" onClick={() => {window.location.href='./local'}}>local</button>
                        </div> */}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default News;
