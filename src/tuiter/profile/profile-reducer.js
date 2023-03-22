import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    name: 'Jose Annunziato', handle: '@jannunzi',
    profilePicture: 'jose.jpeg', bannerPicture: 'polyglot.jpeg',
    bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.',
    location: 'Boston, MA', dateOfBirth: '7/7/1968', dateJoined: '4/2009',
    followingCount: 340, followersCount: 223, total_tuits: 6114,
  }
})

export default profileSlice.reducer;
