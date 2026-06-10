import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: [],
  reducers: {
    addFeed: (state, action) => {
       const { users, reset } = action.payload;
       if (reset) {
        return users;
      } else {
        return [...state, ...users];
      }
    },
    removeUserFromFeed: (state, action) => {
      // it will remove current user from feed
      const newFeed = state.filter((user) => user._id != action.payload);
      return newFeed;
    },
  },
});

export const { addFeed, removeUserFromFeed } = feedSlice.actions;
export default feedSlice.reducer;
