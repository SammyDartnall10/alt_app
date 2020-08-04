import React, { useState, Fragment } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { createUpdateDetails } from "../../actions/profile";

const EditDetails = ({ setAlert, createUpdateDetails, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    location: "",
    title: "",
    industry: "",
  });

  // // Build profile object
  // const profileFields = {};
  // profileFields.user = req.user.id;
  // if (firstName) profileFields.firstName = firstName;
  // if (lastName) profileFields.lastName = lastName;
  // if (location) profileFields.location = location;
  // if (title) profileFields.title = title;
  // if (industry) profileFields.industry = industry;

  const { firstName, lastName, location, title, industry } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    createUpdateDetails({ firstName, lastName, location, title, industry });
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Update Details</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Update your profile details
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={firstName}
            onChange={(e) => onChange(e)}
            // required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={lastName}
            onChange={(e) => onChange(e)}
            // required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={(e) => onChange(e)}
            // required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={(e) => onChange(e)}
            // required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="industry"
            name="industry"
            value={industry}
            onChange={(e) => onChange(e)}
            // required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="EditDetails" />
      </form>
    </Fragment>
  );
};

EditDetails.propTypes = {
  setAlert: propTypes.func.isRequired,
  register: propTypes.func.isRequired,
  isAuthenticated: propTypes.bool,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
  isAuthenticated: state.auth.isAuthenticated,
  profile: state.profile.singleProfile,
});

export default connect(mapStateToProps, { createUpdateDetails })(EditDetails);
