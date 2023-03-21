import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const tuitsSlice = createSlice({
  name: 'tuits',
  initialState: tuits,
  reducers: {
    toggleLiked(state, action) {
      const tuitItem = state.find((tuitItem) =>
          tuitItem._id === action.payload._id)
      tuitItem.liked = !tuitItem.liked
      if (tuitItem.liked) {
        tuitItem.likes++;
      } else {
        tuitItem.likes--;
      }
    },
  }
});

export const {
  toggleLiked
} = tuitsSlice.actions
export default tuitsSlice.reducer;