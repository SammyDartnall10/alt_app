import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfile } from "../../actions/profile";
import EditDetails from "./EditDetails";

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
      {singleProfile && singleProfile.searchSettings[0].space && (
        <div>
          <span>Space: </span>
          <span>{singleProfile.searchSettings[0].space}</span>
        </div>
      )}

      {singleProfile && singleProfile.searchSettings[0].noise && (
        <div>
          <span>Noise: </span>
          <span>{singleProfile.searchSettings[0].noise}</span>
        </div>
      )}

      {singleProfile && singleProfile.searchSettings[0].plugs && (
        <div>
          <span>Plugs: </span>
          <span>{singleProfile.searchSettings[0].plugs}</span>
        </div>
      )}

      {singleProfile && singleProfile.searchSettings[0].food && (
        <div>
          <span>Food: </span>
          <span>{singleProfile.searchSettings[0].food}</span>
        </div>
      )}

      {singleProfile && singleProfile.searchSettings[0].time && (
        <div>
          <span>Time: </span>
          <span>{singleProfile.searchSettings[0].time}</span>
        </div>
      )}

      {singleProfile && singleProfile.searchSettings[0].groupSize && (
        <div>
          <span>Group Size: </span>
          <span>{singleProfile.searchSettings[0].groupSize}</span>
        </div>
      )}

      {singleProfile && singleProfile.searchSettings[0].kidFriendly && (
        <div>
          <span>Kid Friendly: </span>
          <span>{singleProfile.searchSettings[0].kidFriendly}</span>
        </div>
      )}

      {singleProfile && singleProfile.searchSettings[0].petFriendly && (
        <div>
          <span>Pet Friendly: </span>
          <span>{singleProfile.searchSettings[0].petFriendly}</span>
        </div>
      )}

      {singleProfile && singleProfile.searchSettings[0].privacy && (
        <div>
          <span>Privacy: </span>
          <span>{singleProfile.searchSettings[0].privacy}</span>
        </div>
      )}

      {singleProfile && singleProfile.searchSettings[0].wifi && (
        <div>
          <span>Wifi: </span>
          <span>{singleProfile.searchSettings[0].wifi}</span>
        </div>
      )}

      {singleProfile && singleProfile.searchSettings[0].parking && (
        <div>
          <span>Parking: </span>
          <span>{singleProfile.searchSettings[0].parking}</span>
        </div>
      )}

      {singleProfile && singleProfile.searchSettings[0].storage && (
        <div>
          <span>Storage: </span>
          <span>{singleProfile.searchSettings[0].storage}</span>
        </div>
      )}

      {singleProfile && singleProfile.searchSettings[0].coffee && (
        <div>
          <span>Coffee: </span>
          <span>{singleProfile.searchSettings[0].coffee}</span>
        </div>
      )}
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
