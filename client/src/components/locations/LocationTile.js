import React from "react";
import PropTypes from "prop-types";

const LocationTile = ({ loc }) => {
  return (
    <div>
      <h1>Location</h1>
      <p>{loc.businessName}</p>
    </div>
  );
};

LocationTile.propTypes = {};

export default LocationTile;
