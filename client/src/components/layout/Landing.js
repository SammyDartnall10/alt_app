import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Alt Work</h1>
      <div>
        <h4>
          <Link to="alllocations">Find a place to work</Link>
        </h4>
      </div>
      <div>
        <h4>
          <Link to="#!">Add a review</Link>
        </h4>
      </div>
    </div>
  );
};

export default Landing;
