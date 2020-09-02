import React, { Fragment, useEffect } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import ReviewSummary from "../reviews/ReviewSummary"
import TopTile from "./TopTile"
import PreferencesDisplay from "../layout/PreferencesDisplay"

import { getLocation } from "../../actions/locations";

const SingleLocation = ({ getLocation, location: { location, loading }, match }) => {

  useEffect(() => {
    getLocation(match.params.id)
  }, [getLocation])



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
              <button>Add Review</button>
            </div>
          </div>
          <ReviewSummary></ReviewSummary>
        </div>
        ) : (
          <h4>No profiles found...</h4>
        )}
      </div>
    </Fragment>
  );
};

SingleLocation.propTypes = {

};

const mapStateToProps = (state) => ({
  // auth: state.auth,
  location: state.location,
});

export default connect(mapStateToProps, { getLocation })(SingleLocation);
