import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGistsUrl = createAsyncThunk('gists/fetchGistsUrl', async ({files, gistId}) => {
    const req = files.map(file => fetch(file.raw_url).then(res => res.text()));
    return await Promise.all(req);
},
    {
        condition: ({ gistId }, api) => {
            const {files} = api.getState();
            console.log(files);
            return !files.data[gistId]
        }
    });

