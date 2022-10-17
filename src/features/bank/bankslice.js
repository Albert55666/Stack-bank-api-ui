import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import bankService from "./bankservice";
// const bank = JSON.parse(localStorage.getItem("reciever"));

const initialState = {
  bank: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//check correct  account
export const preTransfer = createAsyncThunk(
  "bank/pretransfer",
  async (transferdata, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const SecUSerInfo = thunkAPI.getState().auth.user.SecUSerInfo;
      return await bankService.preTransfer(transferdata, token, SecUSerInfo);
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

export const transferslice = createSlice({
  name: "bank",
  initialState,
  reducers: { reset: (state) => initialState },
  extraReducers: (builder) => {
    builder
      .addCase(preTransfer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(preTransfer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.bank = action.payload;
      })
      .addCase(preTransfer.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = transferslice.actions;
export default transferslice.reducer;
