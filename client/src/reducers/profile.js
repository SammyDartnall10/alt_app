import { GET_PROFILE, PROFILE_ERROR } from "../actions/types";

const initialState = {
  singleProfile: null,
  profiles: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        singleProfile: payload,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        profiles: [],
        singleProfile: null,
        error: payload,
      };
    default:
      return state;
  }
}
