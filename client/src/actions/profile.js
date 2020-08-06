import axios from "axios";
import { setAlert } from "./alert";
import { GET_PROFILE, PROFILE_ERROR } from "./types";
import setAuthToken from "../utils/setAuthToken";

//Load user
export const getProfile = (id) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  console.log("called route");

  try {
    const res = await axios.get("/api/profiles/");
    console.log("Got profile");
    console.log(res.data);

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    console.log("Didnt work");
    dispatch({
      type: PROFILE_ERROR,
    });
  }
};

export const createUpdateDetails = (formData) => async (dispatch) => {
  console.log(formData);
  try {
    // set the headers and content to send
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // make a put request to the url -
    const res = await axios.post("/api/profiles", formData, config);

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    console.log("Didnt update");
    dispatch({
      type: PROFILE_ERROR,
    });
  }
};
