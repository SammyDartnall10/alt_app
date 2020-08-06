import React, { useState, useEffect, Fragment } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { createUpdatePrefs, getProfile } from "../../actions/profile";

const EditPreferences = ({
  createUpdateDetails,
  auth: { isAuthenticated },
  getProfile,
  profile: { singleProfile },
}) => {
  const [formData, setFormData] = useState({
    space: "",
    noise: "",
    plugs: "",
    food: "",
    time: "",
    groupSize: "",
    kidFriendly: "",
    petFriendly: "",
    privacy: "",
    wifi: "",
    parking: "",
    storage: "",
    coffee: "",
  });

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

  useEffect(() => {
    getProfile();

    setFormData({
      space: !singleProfile.searchSettings[0].space
        ? ""
        : singleProfile.searchSettings[0].space,
      noise: !singleProfile.searchSettings[0].noise
        ? ""
        : singleProfile.searchSettings[0].noise,
      plugs: !singleProfile.searchSettings[0].plugs
        ? ""
        : singleProfile.searchSettings[0].plugs,
      food: !singleProfile.searchSettings[0].food
        ? ""
        : singleProfile.searchSettings[0].food,
      time: !singleProfile.searchSettings[0].time
        ? ""
        : singleProfile.searchSettings[0].time,
      groupSize: !singleProfile.searchSettings[0].groupSize
        ? ""
        : singleProfile.searchSettings[0].groupSize,
      kidFriendly: !singleProfile.searchSettings[0].kidFriendly
        ? ""
        : singleProfile.searchSettings[0].kidFriendly,
      petFriendly: !singleProfile.searchSettings[0].petFriendly
        ? ""
        : singleProfile.searchSettings[0].petFriendly,
      privacy: !singleProfile.searchSettings[0].privacy
        ? ""
        : singleProfile.searchSettings[0].privacy,
      wifi: !singleProfile.searchSettings[0].wifi
        ? ""
        : singleProfile.searchSettings[0].wifi,
      parking: !singleProfile.searchSettings[0].parking
        ? ""
        : singleProfile.searchSettings[0].parking,
      storage: !singleProfile.searchSettings[0].storage
        ? ""
        : singleProfile.searchSettings[0].storage,
      coffee: !singleProfile.searchSettings[0].coffee
        ? ""
        : singleProfile.searchSettings[0].coffee,
    });
  }, [getProfile]);

  const {
    space,
    noise,
    plugs,
    food,
    time,
    groupSize,
    kidFriendly,
    petFriendly,
    privacy,
    wifi,
    parking,
    storage,
    coffee,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    createUpdatePrefs(
      {
        space,
        noise,
        plugs,
        food,
        time,
        groupSize,
        kidFriendly,
        petFriendly,
        privacy,
        wifi,
        parking,
        storage,
        coffee,
      },
      singleProfile.user
    );
  };

  if (!singleProfile) {
    // or !this.props.user.profile depending on your initialState
    // https://stackoverflow.com/questions/50862192/react-typeerror-cannot-read-property-props-of-undefined
    return null;
  }

  return (
    <Fragment>
      <h1 className="large text-primary">Update Search Preferences</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Update search preferences
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Space"
            name="space"
            value={space}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Noise"
            name="noise"
            value={noise}
            onChange={(e) => onChange(e)}
          />
        </div>

        <input type="submit" className="btn btn-primary" value="EditDetails" />
      </form>
    </Fragment>
  );
};

EditPreferences.propTypes = {};

const mapStateToProps = (state) => ({
  alerts: state.alert,
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { createUpdatePrefs, getProfile })(
  EditPreferences
);

{
  /* <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Industry"
            name="industry"
            value={industry}
            onChange={(e) => onChange(e)}
          />
        </div> */
}
