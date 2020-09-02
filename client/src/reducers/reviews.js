import { ALL_REVIEWS, REVIEW_ERROR, SINGLE_REVIEW } from "../actions/types";

const initialState = {
  review: null,
  reviews: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ALL_REVIEWS:
      return {
        ...state,
        reviews: payload,
      };
    case SINGLE_REVIEW:
      return {
        ...state,
        review: payload
      }
    case REVIEW_ERROR:
      return {
        ...state,
        reviews: [],
        review: null,
        error: payload,
      };
    default:
      return state;
  }
}