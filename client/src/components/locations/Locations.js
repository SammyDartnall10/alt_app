import React, { Fragment, useEffect } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";

import { all_locations } from "../../actions/locations";

const Locations = ({ locations, all_locations }) => {
  useEffect(() => {
    all_locations();
  });

  return (
    <Fragment>
      <div>
        <h1>All Locations</h1>
        <h4>{locations}</h4>
      </div>
    </Fragment>
  );
};

Locations.propTypes = {
  locations: propTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  // auth: state.auth,
  locations: state.locations,
});

export default connect(mapStateToProps, { all_locations })(Locations);

// export const alllocations = () => async (dispatch) => {
