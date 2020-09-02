import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';


const ReviewSummary = ({ review }) => {
  return (
    <Fragment>
      <div className="tile-border">

        <h4>Review title</h4>
        <p>Review Summary truncated</p>
        <button> See More </button>
      </div>
    </Fragment>
  );
};

ReviewSummary.propTypes = {};

export default ReviewSummary;