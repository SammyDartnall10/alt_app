import React, { Fragment, useEffect } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";

import { all_locations } from "../../actions/locations";

const Locations = ({ all_locations }) => {
  useEffect(() => {
    all_locations();
  });

  return (
    <div>
      <h1>All Locations</h1>
    </div>
  );
};

Locations.propTypes = {
  locations: propTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  // auth: state.auth,
  location: state.payload,
});

export default connect(mapStateToProps, { all_locations })(Locations);

// export const alllocations = () => async (dispatch) => {
