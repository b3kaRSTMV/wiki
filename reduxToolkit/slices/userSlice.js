import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  name: null,
  id: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.name = null;
      state.id = null;
    }
  }
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
