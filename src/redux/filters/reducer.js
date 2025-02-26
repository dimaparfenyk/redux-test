import { statusFilters } from "./constants";

const initialState = {
  status: statusFilters.all,
};

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "filters/setStatusFilter":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
