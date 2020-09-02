import React, { Fragment } from "react";


const PreferencesDisplay = ({ prefs }) => {
  return (
    <Fragment>
      <h1>TESTING</h1>
      {prefs && prefs.searchSettings.space && (
        <div>
          <span>Space: </span>
          <span>{prefs.searchSettings.space}</span>
        </div>
      )}

      {prefs && prefs.searchSettings.noise && (
        <div>
          <span>Noise: </span>
          <span>{prefs.searchSettings.noise}</span>
        </div>
      )}

      {prefs && prefs.searchSettings.plugs && (
        <div>
          <span>Plugs: </span>
          <span>{prefs.searchSettings.plugs}</span>
        </div>
      )}

      {prefs && prefs.searchSettings.food && (
        <div>
          <span>Food: </span>
          <span>{prefs.searchSettings.food}</span>
        </div>
      )}

      {prefs && prefs.searchSettings.time && (
        <div>
          <span>Time: </span>
          <span>{prefs.searchSettings.time}</span>
        </div>
      )}

      {prefs && prefs.searchSettings.groupSize && (
        <div>
          <span>Group Size: </span>
          <span>{prefs.searchSettings.groupSize}</span>
        </div>
      )}

      {prefs && prefs.searchSettings.kidFriendly && (
        <div>
          <span>Kid Friendly: </span>
          <span>{prefs.searchSettings.kidFriendly}</span>
        </div>
      )}

      {prefs && prefs.searchSettings.petFriendly && (
        <div>
          <span>Pet Friendly: </span>
          <span>{prefs.searchSettings.petFriendly}</span>
        </div>
      )}

      {prefs && prefs.searchSettings.privacy && (
        <div>
          <span>Privacy: </span>
          <span>{prefs.searchSettings.privacy}</span>
        </div>
      )}

      {prefs && prefs.searchSettings.wifi && (
        <div>
          <span>Wifi: </span>
          <span>{prefs.searchSettings.wifi}</span>
        </div>
      )}

      {prefs && prefs.searchSettings.parking && (
        <div>
          <span>Parking: </span>
          <span>{prefs.searchSettings.parking}</span>
        </div>
      )}

      {prefs && prefs.searchSettings.storage && (
        <div>
          <span>Storage: </span>
          <span>{prefs.searchSettings.storage}</span>
        </div>
      )}

      {prefs && prefs.searchSettings.coffee && (
        <div>
          <span>Coffee: </span>
          <span>{prefs.searchSettings.coffee}</span>
        </div>
      )}
    </Fragment>
  );
};

PreferencesDisplay.propTypes = {};

export default PreferencesDisplay