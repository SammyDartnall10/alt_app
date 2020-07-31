import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { alllocations } from "../../actions/locations";

const Landing = () => {
  return (
    <Fragment>
      <div className="first-logo">
        <h1 className="title-landing">ALt_</h1>
        <h1 className="title-landing">Work</h1>
        {/* <i class="fas fa-sign-in-alt get-in"></i> */}
      </div>
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
