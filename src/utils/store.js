import { configureStore } from "@reduxjs/toolkit";
import CommentstateSlice from "./CommentstateSlice";
import UserSlice from "./UserSlice";



const store=configureStore({
    reducer:{
        commentstate:CommentstateSlice,
        user:UserSlice,
    }
})

export default store;