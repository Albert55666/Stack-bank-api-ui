import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import bankReducer from "../features/bank/bankslice";
import sendred from "../features/send/sendslice";
import otherReducer from "../features/loan/loansplice";
import mainReducer from "../features/main/mainslice";
import regReducer from "../features/register/regsplice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    reg: regReducer,
    main: mainReducer,
    bank: bankReducer,
    send: sendred,
    other: otherReducer,
  },
});
