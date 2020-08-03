import React, { Fragment, Link } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { logout } from "../../actions/auth";

const Profile = ({ auth: { user }, logout }) => {
  return <div></div>;
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Profile);
