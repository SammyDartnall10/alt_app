import React, { Link, Fragment } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import placeholder from "../../assets/images/placeholder.jpg";

const LocationTile = ({ loc }) => {
  return (
    <Fragment>
      {/* <div>
        <h1>Location</h1>
        <p>{loc.businessName}</p>
      </div> */}
      <Card>
        <Card.Img variant="top" src={placeholder} />
        <Card.Body>
          <Card.Title>{loc.businessName}</Card.Title>
          <Card.Text>
            {/* <p>{loc.businessAddress.streetOne}</p>
            <p>{loc.businessAddress.streetTwo}</p>
            <p>{loc.businessAddress.region}</p> */}
            <strong>
              <p>{loc.businessAddress.city}</p>
            </strong>
          </Card.Text>
        </Card.Body>
      </Card>
      <br></br>
    </Fragment>
  );
};

LocationTile.propTypes = {};

export default LocationTile;
