import React, { Component } from "react";
import webmd from "../img/webmd.png"

class Results extends Component {
  state = {};
  render() {
    return (
        <React.Fragment>

            <div className='container'>
                <div className="row-result1 div-center mt-2"></div>

                <div className= "row">
                    <div className="row-grey div-center">
                        <h className="header "> based on your symptoms we narrowed it down to 1 possible diesease</h>
                    </div>
                </div>

                <div className="row div-center my-3">
                    
                        <h className="header" style={{fontWeight: 'bold'}}>paroxysmal dyspnea</h>
    
                </div>
                <div className="row">
                    <div className="row-prpl">
                        <div className="col-xs-3">
                        <img src={webmd} alt="" style={{position: "relative", float:"left", padding:"2%1%"}}/>
                        </div>

                        <div className="col-xs-9">
                            
                            <h className="result-header">Dyspnea (Shortness of Breath)</h>
                            <p className= "result-text">Dyspnea, or shortness of breath, can be a warning sign of a health problem. Learn more about dyspnea symptoms, causes, and treatments.</p>
                          
                        </div>

                    </div>
                            
                </div>


                <div className="row row-result2 my-3">
                <button className="btn btn-prpl-center mb-4" style={{width: "60%"}} onClick={() => {window.location.href='./assessment'}}> retake assessment</button>

                    </div>
                    </div>
            

                

          
                
         

        </React.Fragment>
    );
  }
}

export default Results;
