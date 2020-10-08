import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { alllocations } from "../../actions/locations";

const Landing = () => {
  return (
    <Fragment>
      <Link to="/login">
        <div className="first-logo">
          <h1 className="title-landing alt-top">ALt_</h1>
          <h1 className="title-landing work-bottom">Work</h1>
          <div>
            <button className="enter-button">Let's Go!!</button>
          </div>
          {/* <i class="fas fa-sign-in-alt get-in"></i> */}
        </div>

      </Link>

      {/* <div className="first-logo">
        <h1 className="title-landing">A</h1>
      </div>
      <div className="second-logo">
        <h1 className="title-landing">W</h1>
      </div> */}
    </Fragment>
  );
};

export default Landing;
