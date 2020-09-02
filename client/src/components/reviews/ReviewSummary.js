import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { allReviews } from "../../actions/reviews"


const ReviewSummary = ({ review }) => {

  // useEffect(() => {
  //   allReviews(location._id)
  // }, [allReviews])

  return (
    <Fragment>
      <div className="tile-border">

        <h4>{review.rating}</h4>
        <strong>{review.review}</strong>
        <button> See More </button>
      </div>
    </Fragment>
  );
};

ReviewSummary.propTypes = {};

export default ReviewSummary;