import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGet } from "../api";
import { API_CONSTANTS } from "../../utils/Constant";


export const getAllUser = createAsyncThunk(
    'user/getAllUser',
    async (args, thunk) => {
        try {
            const userDetails = await fetchGet(API_CONSTANTS.GET_All_USER);
            return thunk.fulfillWithValue(userDetails.data);
        } catch (err) {
            thunk.rejectWithValue(err);
        }
    }
);