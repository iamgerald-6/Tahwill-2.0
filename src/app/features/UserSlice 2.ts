import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface UserState {
  token: string | null;
}
const initialState: UserState = {
  token: null,
 
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.token = null;
      sessionStorage.removeItem("persist:user");
    },
  },
});

export const { setAccessToken, logout } = userSlice.actions;

export default userSlice.reducer;
