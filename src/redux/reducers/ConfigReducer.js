const SET_SMALL_FONT = 'mbl/config/SET_SMALL_FONT';
const SET_MEDIUM_FONT = 'mbl/config/SET_MEDIUM_FONT';
const SET_LARGE_FONT = 'mbl/config/SET_LARGE_FONT';

const initialState = {
  fontSize: 14,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_SMALL_FONT:
      return {
        ...state,
        fontSize: 14,
      };
    case SET_MEDIUM_FONT:
      return {
        ...state,
        fontSize: 18,
      };
    case SET_LARGE_FONT:
      return {
        ...state,
        fontSize: 22,
      };

    default:
      return state;
  }
}

export function setSmallFont() {
  return {type: SET_SMALL_FONT};
}

export function setMediumFont() {
  return {type: SET_MEDIUM_FONT};
}

export function setLargeFont() {
  return {type: SET_LARGE_FONT};
}
