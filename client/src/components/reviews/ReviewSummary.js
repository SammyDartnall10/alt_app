import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';



const ReviewSummary = ({ review }) => {



  return (
    <Fragment>
      <div className="tile-border">

        <h4>{review.rating}</h4>
        <strong>{review.review}</strong>
        <Link to={"/review/view/" + review._id} review={review}>See More</Link>

      </div>
    </Fragment>
  );
};


ReviewSummary.propTypes = {};

export default ReviewSummary;