import { createSlice } from '@reduxjs/toolkit';
import { UserType } from '../types';
import { getAllUser } from '../actions/UserAction';

export interface userState {
  allUsersLoading: boolean;
  allUsers: UserType[];
  error: string;
}

const initialState: userState = {
  allUsersLoading: false,
  allUsers: [],
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUser.pending, (state) => {
      state.allUsersLoading = true;
    });
    builder.addCase(getAllUser.fulfilled, (state, action) => {
      state.allUsersLoading = false;
      state.allUsers = action.payload;
    });
    builder.addCase(getAllUser.rejected, (state) => {
      state.allUsersLoading = false;
      state.error = 'Something went wrong!'
    });
  },
});

export const userAction = userSlice.actions;
export default userSlice.reducer;