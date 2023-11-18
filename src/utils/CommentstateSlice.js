import { createSlice } from "@reduxjs/toolkit";


const commentstateSlice=createSlice({
    name:"commentstate",
    initialState:{
        commentstateValue:false,
        commentarr:["hii How are you?","Good video","Loved your content","You are looking good"]
    },
    reducers:{
        setCommentstatevalue:(state,action)=>{
             state.commentstateValue=action.payload;
        },

        setCommentarr:(state,action)=>{
                state.commentarr.unshift(action.payload);
        }
    }
})

export const {setCommentstatevalue,setCommentarr}=commentstateSlice.actions;
export default commentstateSlice.reducer;