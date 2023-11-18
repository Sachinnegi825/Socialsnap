import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    userdetails: {
      name: "",
      password: "",
    },
    post: "",
    uploadstate: false,
  },

  reducers: {
    setUserdetails: (state, action) => {
      state.userdetails = action.payload;
    },

    setUserpost: (state, action) => {
      state.post = action.payload;
    },
    setUploadstate: (state, action) => {
      state.uploadstate = action.payload;
    },
  },
});

export const { setUserdetails, setUserpost, setUploadstate } =
  UserSlice.actions;

export default UserSlice.reducer;
