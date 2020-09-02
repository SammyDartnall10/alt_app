import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import placeholder from "../../assets/images/placeholder.jpg";


const TopTile = ({ location }) => {
  return (
    <Fragment>
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

      </div>
    </Fragment>
  );
};

TopTile.propTypes = {};

export default TopTile;