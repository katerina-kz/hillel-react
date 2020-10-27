import { createReducer } from "@reduxjs/toolkit";
import { fetchGistsFollowers } from "../actions/followers";

const initialState = {
    loading: false,
    data: [],
    error: null
};

const gistFollowersReducer = createReducer(initialState, {
    [fetchGistsFollowers.pending]: (state) => {
        state.loading = true;
        state.error = null
    },
    [fetchGistsFollowers.fulfilled]: (state, action) => {
        state.data = action.payload;
        state.loading = false;
    },
    [fetchGistsFollowers.rejected]: (state, action) => {
        state.error = action.payload;
        state.loading = false;
    }
});

export default gistFollowersReducer;
