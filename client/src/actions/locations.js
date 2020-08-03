import axios from "axios";
import { setAlert } from "./alert";
import { ALL_LOCATIONS, LOCATION_ERROR } from "./types";
import setAuthToken from "../utils/setAuthToken";

//Get all locations
export const all_locations = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  console.log("clled route");

  try {
    const res = await axios.get("/api/location");
    console.log("Got locations");
    console.log(res.data);

    dispatch({
      type: ALL_LOCATIONS,
      payload: res.data,
    });
  } catch (err) {
    console.log("Didnt work");
    dispatch({
      type: LOCATION_ERROR,
    });
  }
};
