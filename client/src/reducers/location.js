import { ALL_LOCATIONS, LOCATION_ERROR } from "../actions/types";

const initialState = {
  location: null,
  locations: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ALL_LOCATIONS:
      return {
        ...state,
        loading: false,
        locations: payload,
      };
    case LOCATION_ERROR:
      return {
        ...state,
        locations: [],
        location: null,
        error: payload,
      };
    default:
      return state;
  }
}
