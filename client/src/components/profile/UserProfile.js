import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const UserProfile = ({ user, isAuthenticated }) => {
  return <div></div>;
};

UserProfile.propTypes = {};

const mapStateToProps = {
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
};

export default connect(mapStateToProps)(UserProfile);
