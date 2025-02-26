import { createReducer } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";
import { setStatusFilter } from "./actions";

const initialState = { status: statusFilters.all };

export const filtersReducer = createReducer(initialState, (builder) => {
  builder.addCase(setStatusFilter.type, (state, action) => {
    return { ...state, status: action.payload };
  });
});
