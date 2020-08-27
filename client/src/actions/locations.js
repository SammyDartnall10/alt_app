import axios from "axios";
import { setAlert } from "./alert";
import { ALL_LOCATIONS, LOCATION_ERROR, GET_LOCATION, SINGLELOC_ERROR } from "./types";
import setAuthToken from "../utils/setAuthToken";

//Get all locations
export const all_locations = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/location");
    console.log(res.data);

    dispatch({
      type: ALL_LOCATIONS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOCATION_ERROR,
    });
  }
};

export const getLocation = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/location/${id}`)
    dispatch({
      type: GET_LOCATION,
      payload: res.data
    })

  } catch (err) {
    dispatch({
      type: SINGLELOC_ERROR,
    });
  }
}
