import React, { Fragment, useEffect } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import LocationTile from "./LocationTile";

import { all_locations } from "../../actions/locations";

const Locations = ({ all_locations, location: { locations, loading } }) => {
  useEffect(() => {
    all_locations();
  }, [all_locations]);

  return (
    <Fragment>
      <div>
        <h1>All Locations</h1>
      </div>
      {loading ? <h1>loading</h1> : <h1>not loading</h1>}
      <div>
        {locations ? (
          <h3>hello</h3>
        ) : (
          // .map((loc, index) =>
          // <PostItem key={post._id} post={post} />
          <h3>no locatoins</h3>
        )}

        <div>
          {locations ? (
            locations.map((loc) => <LocationTile loc={loc} />)
          ) : (
            <h4>No profiles found...</h4>
          )}
        </div>
      </div>
    </Fragment>
  );
};

Locations.propTypes = {
  // location: propTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  // auth: state.auth,
  location: state.location,
});

export default connect(mapStateToProps, { all_locations })(Locations);

// export const alllocations = () => async (dispatch) => {
