import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    value: "",
  },
  reducers: {
    addData: (state, action) => {
      state.value = action.payload;
    },
    removeData: (state) => {
      state.value = "";
    },
  },
});

export const { addData } = profileSlice.actions;
export default profileSlice.reducer;
