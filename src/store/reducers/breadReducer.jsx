import { createReducer } from "@reduxjs/toolkit";
import { selectedBreadRange } from "../actions/BreadRange";

const initialState = {
  selectedBreadRange: {},
};

const BreadRangeReducer = createReducer(initialState, (builder) => {
  builder.addCase(selectedBreadRange, (state, action) => {
    state.selectedBreadRange = action.payload;
  });
});

export default BreadRangeReducer;