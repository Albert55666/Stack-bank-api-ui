import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import regService from "./regservice";

const initialState = {
  Reg: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// register user
export const registerf = createAsyncThunk(
  "reg/registerf",
  async (user, thunkAPI) => {
    try {
      return await regService.register(user);
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

export const regSplice = createSlice({
  name: "reg",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerf.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerf.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.Reg = action.payload;
      })
      .addCase(registerf.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = regSplice.actions;
export default regSplice.reducer;
