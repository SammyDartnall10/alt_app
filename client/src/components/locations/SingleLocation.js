import React, { Fragment, useEffect } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";

import placeholder from "../../assets/images/placeholder.jpg";

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

  const topTile = (
    <div>
      <div className="row">
        <div className="col">
          <h4>{location.businessName}</h4>
          <div><img className="placeholder-img" src={placeholder}></img></div>
          <strong>{location.businessAddress.streetOne}</strong>
          <p>{location.businessAddress.streetTwo}</p>
          <p>{location.businessAddress.region}</p>
          <p>{location.businessAddress.city}</p>
          <strong>Rating: 4.5</strong>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button>Add Review</button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button>Add Review</button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>Offers:</p>

        </div>
      </div>
    </div>

  )
  return (
    <Fragment>

      <div> {(location) ?
        (<div>{topTile}</div>


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
