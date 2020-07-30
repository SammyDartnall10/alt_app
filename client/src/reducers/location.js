import { ALL_LOCATIONS, LOCATION_ERROR } from "../actions/types";

const initialState = {
  // token: localStorage.getItem("token"),
  // isAuthenticated: null,
  loading: true,
  locations: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ALL_LOCATIONS:
      return {
        ...state,
        // isAuthenticated: true,
        loading: false,
        locations: payload,
      };
    case LOCATION_ERROR:
      return {
        ...state,
        // isAuthenticated: true,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}
