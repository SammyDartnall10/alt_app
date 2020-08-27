import { ALL_LOCATIONS, LOCATION_ERROR, GET_LOCATION, SINGLELOC_ERROR } from "../actions/types";

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
    case GET_LOCATION:
      return {
        ...state,
        location: payload,
      };
    case LOCATION_ERROR:
    case SINGLELOC_ERROR:
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
