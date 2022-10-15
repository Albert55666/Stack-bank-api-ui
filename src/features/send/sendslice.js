import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import sendService from "./sendservice";
// const bank = JSON.parse(localStorage.getItem("reciever"));

const initialState = {
  send: [],
  isErr: false,
  isSucc: false,
  isLoad: false,
  mess: "",
};

//check correct  account
export const transfer = createAsyncThunk(
  "send/transfer",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const SecUSerInfo = thunkAPI.getState().auth.user.SecUSerInfo;
      return await sendService.Transfer(data, token, SecUSerInfo);
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

export const sendslice = createSlice({
  name: "send",
  initialState,
  reducers: { resety: (state) => initialState },
  extraReducers: (builder) => {
    builder
      .addCase(transfer.pending, (state) => {
        state.isLoad = true;
      })
      .addCase(transfer.fulfilled, (state, action) => {
        state.isLoad = false;
        state.isSucc = true;
        state.send.push(action.payload);
      })
      .addCase(transfer.rejected, (state, action) => {
        state.isLoad = false;
        state.isErr = true;
        state.mess = action.payload;
      });
  },
});

export const { resety } = sendslice.actions;
export default sendslice.reducer;
