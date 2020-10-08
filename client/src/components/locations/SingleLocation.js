import React, { Fragment, useEffect } from "react";
import { Link } from 'react-router-dom';
import propTypes from "prop-types";
import { connect } from "react-redux";
import ReviewSummary from "../reviews/ReviewSummary"
import TopTile from "./TopTile"
import PreferencesDisplay from "../layout/PreferencesDisplay"

import { getLocation } from "../../actions/locations";
import { allReviews } from "../../actions/reviews"

const SingleLocation = ({ getLocation, allReviews, location: { location }, reviews: { reviews }, match }) => {

  useEffect(() => {
    getLocation(match.params.id)
  }, [getLocation])

  useEffect(() => {
    allReviews(match.params.id)
  }, [allReviews])


  if (!location) {
    // or !this.props.user.profile depending on your initialState
    // https://stackoverflow.com/questions/50862192/react-typeerror-cannot-read-property-props-of-undefined
    return null;
  }




  return (
    <Fragment>

      <div> {(location) ?
        (<div>
          <TopTile location={location}></TopTile>
          {/* <PreferencesDisplay prefs={location}></PreferencesDisplay> */}
          <div className="row">
            <div className="col">
              <Link to={"/review/"+location._id} loc={location}>
              <button>Add Review</button>
              </Link>
            </div>
          </div>
          
        </div>
        ) : (
          <h4>No profiles found...</h4>
        )}

        {(reviews)?(
          reviews.map((review, index)=>
            <ReviewSummary review={review} key={index}></ReviewSummary>
          )
        ): (
          <h4>Nobody's left a review yet!...</h4>
        )}
      </div>
    </Fragment>
  );
};


// {locations ? (
//   locations.map((loc) => <LocationTile loc={loc} />)
// )


SingleLocation.propTypes = {

};

const mapStateToProps = (state) => ({
  // auth: state.auth,
  location: state.location,
  reviews: state.reviews
});

export default connect(mapStateToProps, { getLocation, allReviews })(SingleLocation);
