import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataList: [],
  favouritemList: JSON.parse(localStorage.getItem("favouritemList")) || [],
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
    addTofavouritemList: (state, action) => {
      const favouritemList = [...state.favouritemList, action.payload];
      localStorage.setItem("favouritemList", JSON.stringify(favouritemList));
      state.favouritemList = favouritemList;
    },
    removeFromfavouritemList: (state, action) => {
      const favouritemList = state.favouritemList.filter(
        (item) => item.name !== action.payload.name
      );
      localStorage.setItem("favouritemList", JSON.stringify(favouritemList));
      state.favouritemList = favouritemList;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateDataList, addTofavouritemList, removeFromfavouritemList } =
  dataSlice.actions;

export default dataSlice.reducer;
