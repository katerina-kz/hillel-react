import { createReducer } from "@reduxjs/toolkit";
import { fetchGists } from "../actions/gists";

const initialState = {
    loading: false,
    data: [],
    error: null
};

const gistReducer = createReducer(initialState, {
    [fetchGists.pending]: (state) => {
        state.loading = true;
        state.error = null
    },
    [fetchGists.fulfilled]: (state, action) => {
        debugger
        state.data = action.payload.map(gist => ({
                ...gist,
                files: Object.values(gist.files)
            }
        ));
        state.loading = false;
    },
    [fetchGists.rejected]: (state, action) => {
        state.error = action.payload;
        state.loading = false;
    }
});

export default gistReducer;

