import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "cookies-next";
import { TOKEN } from "@/constants";

const initialState = {
  isAuth: getCookie(TOKEN) ? true : false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state) => {
      state.isAuth = true;
    },
    setUser: (state, { payload }) => {
      console.log(payload);
      state.user = payload;
    },
  },
  extraReducers: {},
});

export const { name,actions,reducer } = authSlice;

export const { setAuth, setUser } = actions;

export default reducer;
