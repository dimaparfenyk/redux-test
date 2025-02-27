import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

const filtersState = { status: statusFilters.all };

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersState,
  reducers: {
    setStatusFilter: (state, action) => {
      return { ...state, status: action.payload };
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
