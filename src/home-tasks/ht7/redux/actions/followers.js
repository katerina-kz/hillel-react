import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGistsFollowers = createAsyncThunk('gists/fetchGistsFollowers', async (followers) => {
    const data = await fetch(followers).then(res => res.json());
    return data;
});