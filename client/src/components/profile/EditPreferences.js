import React, { useState, useEffect, Fragment } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { createUpdatePrefs, getProfile } from "../../actions/profile";

const EditPreferences = ({
  createUpdatePrefs,
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
      space: !singleProfile.searchSettings.space
        ? ""
        : singleProfile.searchSettings.space,
      noise: !singleProfile.searchSettings.noise
        ? ""
        : singleProfile.searchSettings.noise,
      plugs: !singleProfile.searchSettings.plugs
        ? ""
        : singleProfile.searchSettings.plugs,
      food: !singleProfile.searchSettings.food
        ? ""
        : singleProfile.searchSettings.food,
      time: !singleProfile.searchSettings.time
        ? ""
        : singleProfile.searchSettings.time,
      groupSize: !singleProfile.searchSettings.groupSize
        ? ""
        : singleProfile.searchSettings.groupSize,
      kidFriendly: !singleProfile.searchSettings.kidFriendly
        ? ""
        : singleProfile.searchSettings.kidFriendly,
      petFriendly: !singleProfile.searchSettings.petFriendly
        ? ""
        : singleProfile.searchSettings.petFriendly,
      privacy: !singleProfile.searchSettings.privacy
        ? ""
        : singleProfile.searchSettings.privacy,
      wifi: !singleProfile.searchSettings.wifi
        ? ""
        : singleProfile.searchSettings.wifi,
      parking: !singleProfile.searchSettings.parking
        ? ""
        : singleProfile.searchSettings.parking,
      storage: !singleProfile.searchSettings.storage
        ? ""
        : singleProfile.searchSettings.storage,
      coffee: !singleProfile.searchSettings.coffee
        ? ""
        : singleProfile.searchSettings.coffee,
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
        <div className="form-group">
          <input
            type="text"
            placeholder="Plugs"
            name="plugs"
            value={plugs}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Food"
            name="food"
            value={food}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Time"
            name="time"
            value={time}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Group Size"
            name="groupSize"
            value={groupSize}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Kid Friendly"
            name="kidFriendly"
            value={kidFriendly}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Pet Friendly"
            name="petFriendly"
            value={petFriendly}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Privacy"
            name="privacy"
            value={privacy}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Wifi"
            name="wifi"
            value={wifi}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Parking"
            name="parking"
            value={parking}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Storage"
            name="storage"
            value={storage}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Coffee"
            name="coffee"
            value={coffee}
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
