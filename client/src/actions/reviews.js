import axios from "axios";
import { setAlert } from "./alert";
import { ALL_REVIEWS, REVIEW_ERROR } from "./types";
import setAuthToken from "../utils/setAuthToken";


export const allReviews = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/review/${id}`)
    dispatch({
      type: ALL_REVIEWS,
      payload: res.data
    })

  } catch (err) {
    dispatch({
      type: REVIEW_ERROR,
    });
  }
}