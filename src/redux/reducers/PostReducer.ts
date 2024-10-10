import { createSlice } from '@reduxjs/toolkit';
import { getUserPost } from '../actions/PostAction';
import { PostType } from '../types';

export interface userState {
  userPostLoading: boolean;
  userPost: PostType[];
  error: string;
}

const initialState: userState = {
  userPostLoading: false,
  userPost: [],
  error: '',
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUserPost.pending, (state) => {
      state.userPostLoading = true;
    });
    builder.addCase(getUserPost.fulfilled, (state, action) => {
      state.userPostLoading = false;
      state.userPost = action.payload;
    });
    builder.addCase(getUserPost.rejected, (state) => {
      state.userPostLoading = false;
      state.error = 'Something went wrong!'
    });
  },
});

export const postAction = postSlice.actions;

export default postSlice.reducer;