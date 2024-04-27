import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataList: [],
  favouritemList: [],
  apiDetails: {},
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateDataList: (state, action) => {
      state.dataList = action.payload.data;
      state.apiDetails = action.payload.apiDetails;
    },
    updatefavouritemList: (state, action) => {
      state.favouritemList = action.payload;
    },
    addTofavouritemList: (state, action) => {
      state.favouritemList = [...state.favouritemList, action.payload];
    },
    removeFromfavouritemList: (state, action) => {
      state.favouritemList = state.favouritemList.filter(
        (item) => item.name !== action.payload.name
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateDataList,
  updatefavouritemList,
  addTofavouritemList,
  removeFromfavouritemList,
} = dataSlice.actions;

export default dataSlice.reducer;
