import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { logout } from "../../actions/auth";
import { getProfile } from "../../actions/profile";

// import UserProfile from './UserProfile'

const Profile = ({ auth: { user }, match, logout, getProfile }) => {
  useEffect(() => {
    getProfile()
  });


  return (
    <Fragment>
      <div>
        <h4>Welcome {user.name}</h4>
      </div>
      <div>
        <Link to="/me">
          <i className="fas fa-plus-square f-icon" />
          <span>Show Profile</span>
        </Link>
      </div>
      <div>
        <span>Account Settings</span>
        <ul>

          <li><Link to="/edit-profile" className="btn btn-dark">
            Update Personal Information
      </Link></li>
          <li>Update Search Preferences</li>
          <li>Notifications</li>
        </ul>
      </div>

      <div>
        <span>Alt Locations</span>
        <ul>
          <li>My Locations</li>
          <li>My Reviews</li>
        </ul>
      </div>
      <div>
        <span>Help</span>
        <ul>
          <li>Contact Us</li>
          <li>FAQs</li>
        </ul>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout, getProfile })(Profile);
