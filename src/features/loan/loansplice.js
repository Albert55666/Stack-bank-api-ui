import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import otherServices from "./loanservice";

const initialState = {
  other: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Loan Services
export const loan = createAsyncThunk(
  "other/loan",
  async (loandatam, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const SecUSerInfo = thunkAPI.getState().auth.user.SecUSerInfo;
      return await otherServices.loan(loandatam, token, SecUSerInfo);
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

// Airtime Services
export const airtime = createAsyncThunk(
  "other/airtime",
  async (airtimeData, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    const SecUSerInfo = thunkAPI.getState().auth.user.SecUSerInfo;
    try {
      return await otherServices.airtime(airtimeData, token, SecUSerInfo);
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

export const otherSplice = createSlice({
  name: "other",
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
      .addCase(loan.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loan.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.other = action.payload;
      })
      .addCase(loan.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(airtime.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(airtime.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(airtime.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
  },
});

export const { reset } = otherSplice.actions;
export default otherSplice.reducer;
