import { createSlice } from "@reduxjs/toolkit";

const requestsSlice=createSlice({
    name: "requests",
    initialState:null,
    reducers:{
        addRequests : (state, action)=>action.payload,
        removeRequest: (state, action)=> {

            // filter out the connection that is either accept or reject from an array 
            const newArray=state.filter(r=> r._id!== action.payload)
            return newArray;
        }
    }
});
export const {addRequests, removeRequest}=requestsSlice.actions;
export default requestsSlice.reducer;