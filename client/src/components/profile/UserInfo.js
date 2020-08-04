import React from "react";
import PropTypes from "prop-types";

const UserInfo = ({ singleProfile }) => {
  let content;

  if (singleProfile.firstName !== undefined) {
    content = `Hello ${singleProfile.firstName}`;
  } else {
    content = "Loading.. ";
  }
  return <div>{content}</div>;
};

UserInfo.propTypes = {
  singleProfile: PropTypes.object.isRequired,
};

export default UserInfo;
