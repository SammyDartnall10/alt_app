import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfile } from "../../actions/profile";
// import UserInfo from "./UserInfo";

const UserProfile = ({
  auth: { user, isAuthenticated },
  profile: { singleProfile },
  getProfile,
  match,
}) => {
  useEffect(() => {
    getProfile(user._id);
    //dependecy for that error
  }, [getProfile]);

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
      <button>
        <p>Edit Details</p>
      </button>
      <br></br>
      <h4>Search Preferences settings</h4>
      {singleProfile && singleProfile.searchSettings && (
        <span>{singleProfile.searchSettings[0].space}</span>
      )}
    </Fragment>
  );
};

UserProfile.propTypes = {
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  // isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth,
  profile: state.profile,
});

// const mapStateToProps = (state) => ({
//   // auth: state.auth,
//   location: state.location,
// });

export default connect(mapStateToProps, { getProfile })(UserProfile);

// {/* <h4>{singleProfile._id}</h4> */}
//       {/* <div>
//         <h3>{profile.firstName}'s Profile</h3>
//       </div> */}
