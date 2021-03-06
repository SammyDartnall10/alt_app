import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfile } from "../../actions/profile";
import EditDetails from "./EditDetails";
import PreferencesDisplay from "../layout/PreferencesDisplay"

const UserProfile = ({
  auth: { user, isAuthenticated, loading },
  profile: { singleProfile },
  getProfile,
  match,
}) => {
  useEffect(() => {
    getProfile(user._id);
    //dependecy for that error where it keeps calling the same function
  }, [getProfile]);

  let preferencesOptions = [
    "businessFeatures",
    "featuresBy",
    "space",
    "noise",
    "plugs",
    "food",
    "time",
    "groupSize",
    "kidFriendly",
    "petFriendly",
    "privacy",
    "wifi",
    "parking",
    "storage",
    "coffee",
  ];

  if (!singleProfile) {
    // or !this.props.user.profile depending on your initialState
    // https://stackoverflow.com/questions/50862192/react-typeerror-cannot-read-property-props-of-undefined
    return null;
  }

  return (
    <Fragment>
      {singleProfile && (
        <div>
          <h3>{singleProfile.firstName}'s Profile</h3>

          <h6>Title:</h6>
          <span>{singleProfile.title}</span>
          <h6>Industry:</h6>
          <span>{singleProfile.industry}</span>
          <h6>Location:</h6>
          <span>{singleProfile.location}</span>
        </div>
      )}
      {/* {singleProfile && singleProfile.user && (
        <h4>Testing : {singleProfile.user}</h4>
      )} */}

      {/* Make sure user is logged in, and also the user.id and profile were on, as in the page, match */}
      {/* {user._id === singleProfile.user ? (
        <Link to="/edit-profile" className="btn btn-dark">
          Edit Profile
        </Link>
      ) : (
        <br></br>
      )} */}

      <Link to="/edit-profile" className="btn btn-dark">
        Edit Profile
      </Link>

      <br></br>
      <h4>Search Preferences settings:</h4>

      <PreferencesDisplay prefs={singleProfile}></PreferencesDisplay>
      <Link to="/edit-preferences" className="btn btn-dark">
        Edit Search Preferences
      </Link>
    </Fragment>
  );
};

UserProfile.propTypes = {
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfile })(UserProfile);
