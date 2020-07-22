import axios from "axios";
import { setAlert } from "./alert";
import { ALL_LOCATIONS, LOCATION_ERROR } from "./types";
import setAuthToken from "../utils/setAuthToken";

//Load user
export const alllocations = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/location");

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
