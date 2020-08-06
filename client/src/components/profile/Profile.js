import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { logout } from "../../actions/auth";
// import UserProfile from './UserProfile'

const Profile = ({ auth: { user }, match, logout }) => {
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
          <li>Update Personal Information</li>
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

export default connect(mapStateToProps, { logout })(Profile);
