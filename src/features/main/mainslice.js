import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import mainService from "./mainservice";
// const bank = JSON.parse(localStorage.getItem("reciever"));

const initialState = {
  main: "main",
  isSuccess: false,
  isLoading: false,
  message: "",
};

//check correct  account
export const mainP = createAsyncThunk(
  "main/mainP",
  async (alluserData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await mainService.mainP(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const mainslice = createSlice({
  name: "main",
  initialState,
  reducers: { reset: (state) => initialState },
  extraReducers: (builder) => {
    builder
      .addCase(mainP.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.main = action.payload;
      })
      .addCase(mainP.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = mainslice.actions;
export default mainslice.reducer;
