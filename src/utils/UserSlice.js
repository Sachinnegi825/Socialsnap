import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    userdetails: {
      name: "",
      password: "",
      avatar: "",
    },
    postData: [],
    uploadstate: false,
  },

  reducers: {
    setUserdetails: (state, action) => {
      state.userdetails = action.payload;
    },

    setUserpost: (state, action) => {
      state.postData.push({
        postImage: action.payload.postImage,
        postCaption: action.payload.postCaption,
        postName: state.userdetails.name,
      });
    },

    setUploadstate: (state, action) => {
      state.uploadstate = action.payload;
    },
  },
});

export const { setUserdetails, setUserpost, setUploadstate } =
  UserSlice.actions;

export default UserSlice.reducer;
