import React, { Component } from "react";

class Bootstrap extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/* header element */}
        <h1 className="header">Hello World</h1>

        {/* wide purple button */}
        <button className="btn btn-prpl">trending</button>

        {/* regular purple button */}
        <button className="btn btn-prpl-wd">local</button>

        {/* grey button with center div */}
        <div className="div-center">
          <button className="btn btn-grey">example</button>
        </div>

        {/* wide grey button with center div */}
        <div className="div-center">
          <button className="btn btn-grey-wd">list five symptoms</button>
        </div>

        {/* form control */}
        <div class="form-group">
          <input
            type="email"
            className="form-control form-grey"
            id="exampleFormControlInput1"
            placeholder="type symptom here"
          />
        </div>

        {/* list element */}
        <div className="div-center">
          <ul className="list-full">
            <li className="list-item">headaches</li>
            <li className="list-item">chest pain</li>
            <li className="list-item">shortness of breath</li>
            <li className="list-item">abdominal pain</li>
            <li className="list-item">fatigue</li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Bootstrap;
