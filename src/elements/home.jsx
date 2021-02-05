import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Assessment from "./assessment.jsx";

class Home extends Component {
  state = {};
  render() {
    return (
        <React.Fragment>
           
          <div className="container">
            <div className="row div-center my-3" >
              {/* header */}
              <h1 className="header"style={{marginTop:"80px"}}> Not feeling well today?</h1>
            </div>
            <div class="row div-center">
               {/* clipboard image on the background */}
              <div className= "row-clipboard" >
                {/* purple button */}
                <button className="btn btn-prpl-center" onClick={() => {window.location.href='./assessment'}} >take a self-assessment</button>
              </div>
            </div>
          </div>

        </React.Fragment>
        );
  }
}

export default Home;