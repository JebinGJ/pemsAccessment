import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGet } from "../api";
import { API_CONSTANTS } from "../../utils/Constant";


export const getUserPost = createAsyncThunk(
    'post/getUserPost',
    async (args: { userId: number }, thunk) => {
        try {
            const userPostDetails = await fetchGet(API_CONSTANTS.GET_USER_POST,
                { userId: args.userId }
            );
            return thunk.fulfillWithValue(userPostDetails.data);
        } catch (err) {
            thunk.rejectWithValue(err);
        }
    }
);