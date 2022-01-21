export const initialState = {
  works: [],
  teams: []
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKS":
      return {
        ...state,
        works: action.payload,
      };

      case "SET_TEAMS":
        return {
            ...state,
            teams: action.payload,
        };
    default:
      return state;
  }
};
